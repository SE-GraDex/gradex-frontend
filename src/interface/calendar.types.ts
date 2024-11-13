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

// export interface userStatusLabel {
//   name: string
//   surname: string
//   months: MonthlyDays
// }

export interface MenuItem {
  name: string
  image: string
  PackageName: 'Basic' | 'Deluxe' | 'Premium'
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

export const menuItems: MenuItem[] = [
  {
    name: 'Tom yum kung',
    image: TomYumKung,
    PackageName: 'Deluxe',
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
    ingredients: [
      { ingredient: 'Sea Bass', portion: 1, unit: 'fish' },
      { ingredient: 'Garlic', portion: 5, unit: 'cloves' },
      { ingredient: 'Chili', portion: 3, unit: 'pcs' },
      { ingredient: 'Lime', portion: 2, unit: 'pcs' },
      { ingredient: 'Fish Sauce', portion: 3, unit: 'tbsp' },
    ],
  },
]
