'use strict';

const part1='hello';
const greeting= (name)=>{
    console.log(part1+','+name+'!!');
    return part1+','+name+'!'
   
}

const add=(value1, value2)=>{
    const sum=value1+value2;
    console.log(sum);
    return sum;
}

const value2=300;
const multiply=(value1, value2)=>{
    const res=value1*value2;
    console.log(res);
    return res;
}





const getName = () => {
    return 'Jim';
};

const getLocation = () => {
    return 'Munich';
};

const dateOfBirth = '12.01.1982';


exports.greeting=greeting;
exports.add=add;
exports.multiply=multiply;
exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;
//discussion about module.exports vs exports
//https://www.builder.io/blog/nodejs-module-exports-vs-exports


