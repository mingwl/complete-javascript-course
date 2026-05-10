/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10)

console.log('Jonas');
console.log(23)

let firstName = 'Matilda';

console.log(firstName)
console.log(firstName)
console.log(firstName)

// variable name
let jonas_matilda = 'JM'
let $function = 27
let person = 'fd'
let PI = 3.1415

let myFirstJob = 'Coder'
let myCurrentJob = 'teacher'

console.log(myFirstJob)

let jsIsFun = true
console.log(jsIsFun)

console.log( true)
console.log( jsIsFun)
// console.log( 23)
// console.log( 'jonas')

jsIsFun = 'yes'
console.log( jsIsFun)

let year;
console.log(year)
console.log( year)

year = 1991;
console.log(year)
console.log( year)

console.log( null)

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'fasd'
console.log(lastName)

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName)

let x = 10 + 5
x += 10
x *= 4
x++
x--
x--
console.log(x)

// comparison operator
console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18
console.log(isFullAge)

console.log(now - 1991 > now - 2018)

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018)
console.log(25 - 10 - 5)

let x, y
x = y = 25 - 10 - 5
console.log(x, y)
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)

const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`
console.log(jonasNew)

console.log(`Just a regular string...`)
console.log(`
    String
    line 1
    line 2`)

const age = 15;

if (age >= 18) {
    console.log(`Sara can start driving licence`)
} else {
    const yearLeft = 19 - 15;
    console.log(`Sara is too young, wait another ${yearLeft} years`)
}

const birthYear = 2998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('John')) // invalid number
console.log(typeof NaN)

console.log(String(23), 23)

// type coercion
console.log(`I am ${23} years old`)
// 转换成数字
console.log('23' - '10' - 3)
console.log('23' * '2')
console.log('23' / '2')
// 转换为字符串
console.log('23' + '10' + 3)

let n = '1' + 1 //11
n = n - 1 //10
console.log(n)

// 5 falsy: 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 10;
if (money) {
    console.log(`Don't spend it all`)
} else {
    console.log(`You should get a job`)
}

let height = 0;
if (height) {
    console.log(`height is defined`)
} else {
    console.log(`Height is undefined`)
}

const age = 18;

// strict equality operator: 无强制类型转换 no type coercion
if (age === 18) {
    console.log(`you just became an adult (strict)`)
}

// loose equality operator: 执行强制类型转换 type coercion
if (age == 18) {
    console.log(`you just became an adult (loose)`)
}

const favorite = Number(prompt(`what's your favorite number? `))
console.log(favorite, typeof favorite)

if (favorite === 23) {
    console.log(`23 is an amazing number`)
} else if (favorite === 7) {
    console.log(`7 is also a cool number`)
} else {
    console.log(`number ${favorite} is not 23 nor 7`)
}

if (favorite !== 23) {
    console.log(`why not 23?`)
}
*/

const hasDriverLicense = true;
const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision)
// console.log(hasDriverLicense || hasGoodVision)
// console.log(!hasDriverLicense)

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log(`Sara is able to drive`)
// } else {
//     console.log(`Someone else shoudl drive`)
// }

const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired)
// console.log(hasDriverLicense || hasGoodVision || isTired)
if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sara is able to drive`)
} else {
    console.log(`Someone else shoudl drive`)
}

