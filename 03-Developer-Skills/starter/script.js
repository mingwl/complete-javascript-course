// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const myvar = '23';
if (myvar === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(myvar);
console.log(calcAge(1991));
console.log(1951);

const calcTempAmplitude = temps => {
  let min = temps[0];
  let max = temps[0];
  let cur;
  for (let i = 1; i < temps.length; i++) {
    cur = temps[i];
    if (typeof cur !== 'number') continue;
    min = cur < min ? cur : min;
    max = cur > max ? cur : max;
  }
  const amplitude = max - min;
  console.log(`amplitude from ${min} to ${max} is ${amplitude}`);
  return amplitude;
};

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
console.log(calcTempAmplitude(temp));
console.log(calcTempAmplitude([3, 7, 4, 23]));

const temp2 = [-100, 100];
console.log(calcTempAmplitude(temp.concat(temp2)));

*/

const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsuis',
    vallue: 10,
    // value: Number(prompt(`Degrees Celsius: `)),
  };

  console.log(measurement);
  //   console.table(measurement);
  //   console.log(measurement.value, typeof measurement.value);
  //   console.warn(measurement.value, typeof measurement.value);
  //   console.error(measurement.value, typeof measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitude = temps => {
  let min = temps[0];
  let max = temps[0];
  let cur;
  for (let i = 1; i < temps.length; i++) {
    cur = temps[i];
    if (typeof cur !== 'number') continue;

    debugger;
    min = cur < min ? cur : min;
    max = cur > max ? cur : max;
  }
  const amplitude = max - min;
  console.log(`amplitude from ${min} to ${max} is ${amplitude}`);
  return amplitude;
};

const temp = [3, 5, 1, 9, 4, 5];
console.log(calcTempAmplitude(temp));
