import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_ITEM_CLASS =
  "basis-[calc((100%-0.75rem)/2)] sm:basis-[calc((100%-3rem)/3)] md:basis-[calc((100%-4.5rem)/4)] lg:basis-[calc((100%-6rem)/5)]";

function Slider({ items, renderItem, itemClassName = DEFAULT_ITEM_CLASS }) {
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrolled = Math.abs(el.scrollLeft);
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(scrolled > 4);
    setCanNext(scrolled < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, items]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const showArrows = canPrev || canNext;

  return (
    <div className="relative">
      {showArrows && (
        <>
          <button
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="قبلی"
            className="absolute top-1/2 -translate-y-1/2 right-1 sm:-right-3 z-20 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-md text-[#4A3E3D] hover:bg-[#4A3E3D] hover:text-white transition disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="بعدی"
            className="absolute top-1/2 -translate-y-1/2 left-1 sm:-left-3 z-20 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-md text-[#4A3E3D] hover:bg-[#4A3E3D] hover:text-white transition disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft size={20} />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div key={item.id} className={`snap-start shrink-0 ${itemClassName}`}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;