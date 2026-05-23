'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20;00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// 114 nullish coalesing operator ?? (ES2020)
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// nullish: null and undefined (not 0 nor '')
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3);

/*

// 113 short circuiting && and ||
// use any data type
// return any data type
// short-circuiting

// || return the 1st trucy value
// || 返回第一个真值 否则最后一个值
console.log('--- OR ---');
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || '' || 0 || 'hello' || 23 || null); // hello

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// && return the 1st faulsy value
// && 返回第一个假值 否则最后一个值
console.log('--- AND ---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


// 112 the rest operator
// 1.destructuring
// spread, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2. the rest operator in function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(numbers, sum);
};
add(2, 3);
add(5, 3, 7, 2);

// the spread operator
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


// 111 the spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(newArr[0], newArr[1], newArr[2], newArr[3], newArr[4]);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables: array, string, map, set. Not object
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log(str[0], str[1]);
// console.log(`${...str}`);

// real world example
const ingredients = [
  // prompt("Let's make pasta ing1"),
  // prompt("Let's make pasta ing2"),
  // prompt("Let's make pasta ing3"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// since ES2018: ... works on objects
const newRestaurant = { foundedIn: 1990, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// shallow copy object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name, restaurantCopy.name);


// 109 Destructing Object 打散对象
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 2',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 3',
});

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// rename variables
const { name: restoName, openingHours: hours, categories: tags } = restaurant;
console.log(restoName, tags, hours);

// default value if variables does not exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutate variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// console.log(a, b);

// create a code block with ()
({ a, b } = obj);
console.log(a, b);

// nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// 108 Destructing Arrays 打散数组
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// function return multiple values
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// 打散镶嵌数组
const nested = [2, 4, [5, 6]];
const [n1, , n3] = nested;
console.log(n1, n3);

const [m1, , [m31, m32]] = nested;
console.log(m1, m31, m32);

// 默认值
const [p1 = 1, p2 = 1, p3 = 1] = [8, 9];
console.log(p1, p2, p3);
*/
