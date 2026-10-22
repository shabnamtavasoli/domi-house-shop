import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("domi_cart_items");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("domi_cart_items", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cartItems]);

  const addToCart = (product, selectedVariant) => {
    setCartItems((prevItems) => {
      const variantKey = selectedVariant 
        ? (selectedVariant.id || selectedVariant.color || selectedVariant.name || JSON.stringify(selectedVariant))
        : 'default';
      
      const itemId = `${product.id}-${variantKey}`;
      const existingIndex = prevItems.findIndex((item) => item.cartItemId === itemId);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            cartItemId: itemId,
            product,
            selectedVariant,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    const rawPrice = 
      item.selectedVariant?.price || 
      item.product.price || 
      (item.product.variants && item.product.variants[0]?.price) || 
      0;

    const numericPrice = Number(rawPrice.toString().replace(/,/g, "").trim()) || 0;
    const isDiscounted = item.product.isNew === false;
    const finalPrice = isDiscounted ? Math.round(numericPrice * 0.7) : numericPrice;

    return acc + finalPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalCartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);