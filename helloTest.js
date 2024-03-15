'use strict';
//是因为我们总是以严格模式运行JavaScript代码，避免各种潜在陷阱。

console.log('Hello, world.'); 
//%%% node helloTest.js

const part2='world';
const string2=`Hello, ${part2}!`; 
//(1) use template string `` rather than quote '', in order to use ${}.
//(2) if use "name" as the variable name, it will show a strikethrough. 
//this is because name is an obsolete property of the Window object. When you see a strikethrough on a variable, VS Code knows that it is deprecated.
console.log(string2);
//question (1) how to set up launch.json file, why does my launch.json not work?


//
//question (2) should i install express locally or globally
//Q(2)Answer:
//For creating an app, you should always install it locally. This will allow you to use different express version for each app you make. 
//Installing express globally will allow you to use the express command line utility to create boilerplate code and stuff

