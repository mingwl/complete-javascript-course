'use strict';

// Data needed for first part of the section
// 118 enhanced object literal
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // before ES6
  // openingHours: openingHours,
  // ES6 enhanced object literals
  openingHours,

  // ES6 enhanced object literals
  order(starterIndex, mainIndex) {
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

// 116 数据结构习题1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 132 数据结构习题4之处理字符串
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = input => input.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [status, from, to, time] = flight.split(';');
  const output =
    `${status.includes('Delayed') && '🔴'}${status.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
      50,
    );
  console.log(output);
}

/*
// 131 数据结构习题3

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.trim().toLowerCase().split('_');
    // console.log(
    //   [first, second[0].toUpperCase() + second.slice(1)]
    //     .join('')
    //     .padEnd(20, ' '),
    // );
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 2)}`);
  }
});

// Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

// 130 处理字符串3
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

// split and join
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);
console.log(`Mr. ${firstName} ${lastName.toUpperCase()} `);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const words = name.split(' ');
  const result = [];
  for (const word of words) {
    // result.push(word[0].toUpperCase() + word.slice(1));
    result.push(word.replace(word[0], word[0].toUpperCase()));
  }
  return result.join(' ');
};
const passenger = `jessica ann smish devis`;
console.log(capitalizeName(passenger));
console.log(capitalizeName('jonas schmedtmann'));

// padding the string
const message = 'Go to gate 23';
console.log(message.padStart(20, '*').padEnd(30, '*'));
console.log('Jonas'.padStart(20, '*').padEnd(30, '*'));

const maskCreditCard = function (number) {
  const str = number + '';
  // console.log(str.length);
  return str.slice(-4).padStart(str.length, '*');
};
console.log(maskCreditCard(1234567890));
console.log(maskCreditCard('1234567890'));

// repeat
const message2 = 'Bad weather... all departures deplayed';
console.log(message2.repeat(3));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in lines ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(10);

// 129 处理字符串2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passenger.slice(0, 1).toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

const capitalize = str =>
  str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalize('jOnAS'));

// comparing email
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';
console.log(loginEmail.trim().toLowerCase() === email);

// ES2019 trimStart() and trimEnd()
const compareStr = (src, target) => src.trim().toLowerCase() === target;
console.log(compareStr('   Hello@Jonas.Io \n', 'hello@jonas.io'));

// replacing
const priceGB = '299,97£';
const priceCN = priceGB.replace('£', '¥').replace(',', '.');
console.log(priceCN);

const announcement = `All passengers come to bording door 23. Boarding door 23`;
console.log(announcement.replaceAll('door', 'gate'));

// 正则表达式 regexp
console.log(announcement.replace(/door/g, 'gate2'));

// booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};
checkBaggage(`I'v got a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and cameras`);
checkBaggage(`Got some snacks and a gun for protection`);

// 128 处理字符串1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// extract the first word
console.log(airline.slice(0, airline.indexOf(' ')));
// extract the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// extract from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const lastLetter = seat.slice(-1);
  // console.log(lastLetter);
  const isMiddleSeat = ['B', 'E'].includes(lastLetter);
  console.log(
    `${seat} is a ${isMiddleSeat ? 'middle seat 😥' : 'NOT a middle seat 🎉'}`,
  );
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('afd'));
console.log(typeof new String('afd'));
console.log(typeof new String('afd').slice(1));

// 127 数据结构习题3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`,
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// 125 Map循环
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// convert map to array
console.log([...hoursMap]);
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

// map are iterables: Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key !== 'number') continue;
  console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// 124 Map ES6
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

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

// 123 Set ES2025 7 new methods
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('intersection:', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('union:', italianMexicanFusion);
console.log([...italianMexicanFusion]);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('unique italian', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('unique mexican', uniqueMexicanFoods);

const uniqueItalianMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('unique italian and mexican', uniqueItalianMexicanFoods);
console.log(uniqueItalianFoods.union(uniqueMexicanFoods));

console.log(
  'italian maxican has no intersection:',
  italianFoods.isDisjointFrom(mexicanFoods),
);

// 122 Set (iterable)
// param is also an iterable (string, array)
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(
  orderSet,
  orderSet.size,
  orderSet.has('Pizza'),
  orderSet.has('Bread'),
);
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

console.log(new Set('Jonas'));
console.log(new Set());

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique, staffUnique.length);
console.log(new Set('jonasschmedtmann').size);

// 121 数据结构习题2
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const calcAvg = (...numbers) => {
  let sum = 0;
  for (const item of numbers) sum += item;
  return sum / numbers.length;
};
// console.log(calcAvg(1, 2, 3, 4, 5));
// const { team1, x: draw, team2 } = game.odds;
// console.log(calcAvg(team1, draw, team2));
const odds = Object.values(game.odds);
// console.log(odds);
console.log(calcAvg(...odds));

// 3.
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${str} ${odd}`);
  // console.log(`Odd of ${game[team] || 'draw'}: ${odd}`);
}

// BONUS.
const scorers = {};
// for (const [i, item] of Object.entries(game.scored)) {
//   console.log(i, item);
//   scorers[item] &&= scorers[item]++;
//   scorers[item] ??= 1;
// }
for (const player of game.scored) {
  // console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// 120 循环对象
// Object's property-s names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// object's property's values
const values = Object.values(openingHours);
console.log(values);

// object's property's entries
const openEntries = Object.entries(openingHours);
// console.log(openEntries);

for (const [day, { open: start, close: end }] of openEntries) {
  console.log(`On ${day} we open at ${start}h and we close at ${end}h`);
}

// 119 optional chaining ?. (ES2020)
// false: null, undefined
// true: 0, ''
console.log(restaurant?.openingHours?.mon?.open);
console.log(restaurant?.openingHours?.fri?.open);
console.log(restaurant?.open?.mon?.open);
console.log(restaurant?.open?.fri?.open);

for (const day of weekdays) {
  const open = restaurant?.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.order2?.(0, 1) ?? 'method does not exist');

// arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users2 = [];
if (users2.length > 0) console.log(users[0]?.name);
else console.log('users array empty');
console.log(users[0]?.name ?? 'users array empty');
console.log(users2[0]?.name ?? 'users array empty');

// 118 enhanced object literal

// 117 for-of循环
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, item] of menu.entries()) {
  // console.log(`${item[0] + 1}: ${item[1]}`);
  console.log(`${i + 1}: ${item}`);
}
// console.log([...menu.entries()]);

// 116 数据结构习题1
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayer] = players1;
console.log(gk, fieldPlayer);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const finalPlayers = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(finalPlayers);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(odds);
// const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored by ${players}`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
console.log(team1, team2);
team1 < team2 && console.log(`team1 is more likely to win`);
team2 < team1 && console.log(`team2 is more likely to win`);

// 115 逻辑赋值运算符
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR 赋值运算符：如等号左边值为假既赋值
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
// 赋值运算符：如等号左边值为假既赋值
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND 赋值运算符：如等号左边值为真既赋值
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);

// 114 nullish coalesing operator ?? (ES2020)
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// nullish: null and undefined (not 0 nor '')
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3);


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
