// ================= Operations ============= //

let value = 3;
let negValue = -value;
console.log(negValue);

let a = 4;
let b = 2;

console.log(a + b); //add
console.log(a - b); //sub
console.log(a * b); //multiply
console.log(a ** b); //raise power
console.log(a / b); //division provided ( b =! 0)
console.log(a % b); //modulus

let str1 = "Hello";
let str2 = "Ron";

let str = str1 + str2; // addition of strings

//complex situation//

console.log("1" + 2);
console.log(1 + "2");
// Here these digits are not added rather they are just printed as 12

//what if
console.log("1" + 2 + 2);
// In this case the output is 122
console.log(1 + 2 + "2");
// While in this case it prints 32 , which is weird

console.log(3 + ((4 * 5) % 3)); // This is complex and weird probably for exams

console.log(((3 + 4) * 5) % 3); // This is more readable and simple

console.log(true); //  correct 

console.log(+true); // again do not use this 

console.log(+""); // not again

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2 // not again , do not use such pecie of code 

//========precedence operator=========//
let A , B 
// Post fix -- The current value of x is used in the expression first, and then x is incremented or decremeneted.

A = 100
A++;     
console.log(A);

// Prefix -- The value of x is incremented or decremented first, then the result is used in the expression

B = 100
++B;     
console.log(B);


