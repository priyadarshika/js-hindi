// #primitive "javascipt is dynamically typed language"

//  7 types : string, Number, Boolean, null, undefined, symbol(to make any value unique), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotehrId = Symbol('123')

// console.log(id === anotehrId); result false

const bigNumber = 8136473246980948n  // n= is use to make it bigInt 

// reference type(non primitive) 

// array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "darshi",
    age: 22
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
