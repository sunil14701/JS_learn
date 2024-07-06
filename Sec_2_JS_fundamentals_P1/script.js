/*
// //l8: linking a JS file 
// let js = "amazing";
// if (js == "amazing") alert("JS is FUN!");

// console.log("See in console:", 12 + 56 + 34);

// let ans = 1 + 3 + 4;
// console.log(ans);

// inline script-> in html file
*/

// ----------------------------------------------------------------------\
/*
// //l9 values and variables 
// variable-> is a box that stores a value
console.log("Jonas");
console.log(23);

let firstName = "Jonas"; // camelcase naming convention for variable
console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3name = 3 // try to read syntax errors
// variable name can not start with a number. it can only contain numbers, letters, underscore or $ sign.
let $sunil = "name";
console.log($sunil);
// variable name can not be reserved JS keyword
// let new = 'name';
let $new = "name";
// let function = 'name'
let _function = "name";
let name = "name";
let Name = "name"; // upper case start is not illegal but not recommended
let PI = 3.14; // all uppercase variable name is constant value throughtout the code

// write descriptive names
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
// not like
let job1 = "Programmer";
let job2 = "Teacher";
*/

//------------------------------------------------------------------------------------

/*
// //l11: data types
// values -> 1. object 2. primitve

// JS is interpreted lang
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 1);
console.log(typeof 1.2);
console.log(typeof "Jonas");
console.log(typeof undefined); // undefined is empty value
console.log(typeof null);
console.log(typeof Object);
console.log(typeof Symbol);
console.log(typeof BigInt);

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);// bug, null is not a object, it should return null like undefined's behaviour
*/

// ---------------------------------------------------------------------------------
/*
// // l12: let, const and var

// let -> variables that can changed later
let age = 30;
age = 31; // mutating variable

let year;
year = 1991;

// const -> variable that can not be changed
const PI = 3.14;
// PI = 4; // immutable variable, typeerror
// const job; // no empty const variable

// note: by default use const, but if you are sure that the variable have possibliyt to change than use let keyword. it will reduce bugs.

//avoid var keyword.
var job = "programmer";
job = "teacher";

// note: let is block scope and var is function scoped

// don't need var or const.  never write variable w/o let or const
lastName = "kumar"; // JS does'nt create a variable in current scope instead JS will create property on global object
console.log(lastName);
*/

// ------------------------------------------------------------------------------
// // l13:basic operators

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas",
  lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// typeof operator
console.log(typeof firstName);

// assignment opertor
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// comparison operator
console.log(ageJonas > ageSarah);
const isFullAge = ageSarah >= 18;
console.log(isFullAge);

// check operator presidence
