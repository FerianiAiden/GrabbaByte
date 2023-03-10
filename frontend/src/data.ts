import {Food} from './app/shared/models/food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: ' ByteBurger ',
    cookTime: '15-20',
    price: 10,
    favorite: false,
    origins: ['germany','us'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id:'2',
    name: 'Pizza',
    price: 5,
    cookTime: '10-15',
    favorite: true,
    origins: ['italy'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'3',
    name: 'Soda',
    price: 2,
    cookTime: '0',
    favorite: false,
    origins: ['us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Beverage'],
  },
  {
    id:'4',
    name: 'Blueberry Pie',
    price: 15,
    cookTime: '40-50',
    favorite: true,
    origins: [ 'us'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['SlowFood', 'Pie', 'Sweet'],
  },
  {
    id:'5',
    name: 'Apple Pie',
    price: 15,
    cookTime: '40-50',
    favorite: false,
    origins: ['us'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['SlowFood', 'Pie', 'Sweet'],
  },
  {
    id:'6',
    name: 'Donut',
    price: 4,
    cookTime: '10',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['FastFood', 'Sweet'],
  },
  {
    id:'7',
    name: 'Drip Coffee',
    price: 3,
    cookTime: '5',
    favorite: true,
    origins: ['egypt', 'turkey'],
    stars: 3.3,
    imageUrl: 'assets/food-7.jpg',
    tags: ['Beverage'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]