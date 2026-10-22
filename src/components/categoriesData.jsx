import beddingImg from '../assets/bedding.jpg';
import furnitureImg from '../assets/furniture.jpg';
import chandelierImg from '../assets/chandelier.jpg';
import electricalImg from '../assets/electrical-appliances.jpg';
import servingwareImg from '../assets/servingware.jpg';
import decorativeImg from '../assets/decorative.jpg';
import kitchenImg from '../assets/kitchen-Essentials.jpg';
import carpetImg from '../assets/carpet.jpg';
import bathroomImg from '../assets/bathroom-accessory.jpg';
import textilesImg from '../assets/textiles.jpg';

import servingBannerImg from '../assets/serving-set-banner.jpg';
import furnitureBannerImg from '../assets/furniture-set-banner.jpg';

export const categories = [
  { id: 1, title: 'کالای خواب', category: 'bedding', image: beddingImg },
  { id: 2, title: 'مبلمان و صندلی', category: 'furniture', image: furnitureImg },
  { id: 3, title: 'روشنایی و لوستر', category: 'chandelier', image: chandelierImg },
  { id: 4, title: 'لوازم برقی آشپزخانه', category: 'electrical-appliances', image: electricalImg },
  { id: 5, title: 'ظروف پذیرایی', category: 'servingware', image: servingwareImg },
  { id: 6, title: 'دکوراتیو', category: 'decorative', image: decorativeImg },
  { id: 7, title: 'ملزومات آشپزخانه', category: 'kitchen-Essentials', image: kitchenImg },
  { id: 8, title: 'فرش و موکت', category: 'carpet', image: carpetImg },
  { id: 9, title: 'ست سرویس بهداشتی', category: 'bathroom-accessory', image: bathroomImg },
  { id: 10, title: 'منسوجات', category: 'textiles', image: textilesImg },
];

export const featuredBanners = [
  {
    id: 1,
    title: 'ست ظروف پذیرایی دفرمه و مدرن',
    image: servingBannerImg,
    link: '/category/servingware',
  },
  {
    id: 2,
    title: 'ست نهارخوری و مبلمان راحتی',
    image: furnitureBannerImg,
    link: '/category/furniture',
  },
];