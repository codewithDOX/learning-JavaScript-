//========Primitive==========//

// primitives are call by value 
// They are called "call by value" because when you assign a primitive value to a variable or pass it to a function, JavaScript creates a copy of that value. Any changes made to the copy do not affect the original value. This contrasts with objects, which are passed by reference, where changes to the reference affect the original object.

const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 452342342343464n

// 7 types  : string , Number , Boolean , nULL , undefined , symbol ,  BigInt 

//Reference (Non primitive)

// Array , Objects , Functions

const heros = ("Sentry", "doctordoom", "aegonTargareyn")
 let myObj ={
    name: "VVNVJGN",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log( typeof scoreValue); //  easy way to know about the datatype of variable

//type of variable ----> 
// undefined ----> undefined
// Boolean --> object
// Number ---> number 
// strings ----> strings 
