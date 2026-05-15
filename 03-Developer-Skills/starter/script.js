// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const myvar = '23';
if (myvar === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(myvar);
console.log(calcAge(1991));
console.log(1951);
*/

const calcTempAmplitude = temps => {
  let min = temps[0];
  let max = temps[0];
  for (let i = 1; i < temp.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    min = temps[i] < min ? temps[i] : min;
    max = temps[i] > max ? temps[i] : max;
    console.log(min, max);
    return max - min;
  }
};

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
console.log(calcTempAmplitude(temp));
