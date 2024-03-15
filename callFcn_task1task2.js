'use strict';

const user = require('./task1task2');


const part2name='Candice';
user.greeting(part2name);
const value1=1;
const value2=2;
const res_add=user.add(value1,value2);
const res_mul=user.multiply(value1,value2);
console.log("sum is: "+res_add+", mul is: "+res_mul);

console.log(
  `${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}.`
);



