import riceImages from '../assets/images/imagesForMealPre/bowl-rice.svg'
import crownImages from '../assets/images/imagesForMealPre/crown.svg'
import daimondImages from '../assets/images/imagesForMealPre/diamond.svg'
import FriedFish from '../assets/images/imagesForMealPre/fried-fish.svg'
import PadThai from '../assets/images/imagesForMealPre/pad-thai.svg'
import SalmonSteak from '../assets/images/imagesForMealPre/salmon-steak.svg'
import TomYumKung from '../assets/images/imagesForMealPre/tom-yum-kung.svg'

export type Ingredient = {
  ingredient: string
  portion: number
  unit: string
  priceperunit?: number
}

export interface Day {
  day: number
  detail: Record<string, Ingredient[]>
  status: number
}

export interface MonthlyDays {
  '0': (null | Day)[]
  '1': (null | Day)[]
  '2': (null | Day)[]
  '3': (null | Day)[]
  '4': (null | Day)[]
  '5': (null | Day)[]
  '6': (null | Day)[]
  '7': (null | Day)[]
  '8': (null | Day)[]
  '9': (null | Day)[]
  '10': (null | Day)[]
  '11': (null | Day)[]
}

export interface MenuItem {
  name: string
  image: string
  PackageName: 'Basic' | 'Deluxe' | 'Premium'
  Description?: string;
  ingredients: Ingredient[]
}

// export type IngredientsData = Record<string, Ingredient[]>

export type IngredientsData = {
    [key: string]: Ingredient[]; // key เป็น string, value คืออาเรย์ของ Ingredient
  };

export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const packageItems = {
  Basic: riceImages,
  Deluxe: daimondImages,
  Premium: crownImages,
}

export interface packageDetill{
  package_name:string;
  price:number;
  features:string;
  package_start_date:Date;
}

export const packageDetail:packageDetill[] = [
  {
      package_name:'Basic',
      price:180,
      features:'ทุกเมนูอาหารที่มีราคาไม่เกิน 80 บาท อิ่มอร่อยง่าย แถมมีประโยชน์ เหมาะกับลูกค้าทุกคน',
      package_start_date: new Date(Date.now()),
  },
  {
      package_name:'Deluxe',
      price:250,
      features:'ทุกเมนูอาหารที่มีราคาไม่เกิน 150 บาท ปลดล็อคจานโปรดแบบใหม่ให้กับทุกคนได้ทานอย่างมีความสุข',
      package_start_date:new Date()
  },
  {
      package_name:'Premium',
      price:350,
      features:'ปลดล็อกทุกเมนูอาหารจานโปรดของคุณ เพื่อให้คุณได้เข้าถึงเมนูที่มีประโยชน์ทุกจาน ',
      package_start_date:new Date()
  }
]

export const menuItems: MenuItem[] = [
  {
    name: 'Tom yum kung',
    image: TomYumKung,
    PackageName: 'Deluxe',
    Description: 'A classic Thai soup known for its hot and sour flavors, featuring shrimp and aromatic herbs like lemongrass and kaffir lime leaves.',
    ingredients: [
      { ingredient: 'Shrimp', portion: 200, unit: 'g' },
      { ingredient: 'Lemongrass', portion: 3, unit: 'stalk' },
      { ingredient: 'Kaffir Lime Leaves', portion: 5, unit: 'leaves' },
      { ingredient: 'Chili', portion: 2, unit: 'pcs' },
      { ingredient: 'Fish Sauce', portion: 2, unit: 'tbsp' },
    ],
  },
  {
    name: 'Salmon steak',
    image: SalmonSteak,
    PackageName: 'Basic',
    Description: 'A delicious and healthy dish made with pan-seared king salmon, served with steamed broccoli and a hint of lemon.',
    ingredients: [
      { ingredient: 'King Salmon', portion: 500, unit: 'g' },
      { ingredient: 'Broccoli', portion: 5, unit: 'pcs' },
      { ingredient: 'Lemon', portion: 3, unit: 'slice' },
    ],
  },
  {
    name: 'Pad Thai',
    image: PadThai,
    PackageName: 'Basic',
    Description: 'A world-famous Thai stir-fried noodle dish, featuring rice noodles, shrimp, egg, peanuts, and a tangy tamarind sauce.',
    ingredients: [
      { ingredient: 'Rice Noodles', portion: 200, unit: 'g' },
      { ingredient: 'Shrimp', portion: 100, unit: 'g' },
      { ingredient: 'Egg', portion: 2, unit: 'pcs' },
      { ingredient: 'Peanuts', portion: 2, unit: 'tbsp' },
      { ingredient: 'Tamarind Paste', portion: 1, unit: 'tbsp' },
    ],
  },
  {
    name: 'Deep fried sea bass',
    image: FriedFish,
    PackageName: 'Premium',
    Description: 'A crispy and flavorful whole sea bass fried to perfection, paired with garlic, chili, and a zesty lime dressing.',
    ingredients: [
      { ingredient: 'Sea Bass', portion: 1, unit: 'fish' },
      { ingredient: 'Garlic', portion: 5, unit: 'cloves' },
      { ingredient: 'Chili', portion: 3, unit: 'pcs' },
      { ingredient: 'Lime', portion: 2, unit: 'pcs' },
      { ingredient: 'Fish Sauce', portion: 3, unit: 'tbsp' },
    ],
  },
];

