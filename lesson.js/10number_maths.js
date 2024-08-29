const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // by converting it into strings its gets an additional features

console.log(balance.toString().length);
console.log(balance.toFixed(2));// value is good for e commerce website

const otherNumber = 23.4535
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// for indian number system

//=============Maths=============//

console.log(Maths);
console.log(Maths.abs(-4));// absolute value ----> 4
console.log(Math.round(4.3));//round off ---->4

console.log(Math.ceil(4.3));// ceil meaning top value or it is constraint 
console.log(Math.floor(4.3));// floor meaning bottom value

console.log(Math.min(4 , 3 ,4 ,5 , 2 ));
console.log(Math.max(4 , 3 ,4 ,5 , 2 ));

console.log(Math.random()); // its value lies in 0 to 1 
console.log((Math.random()*10) + 1); // +1 to avoid zero

const min = 10
const max =  20

console.log(Math.floor(Math.random() * (max -min + 1)) + min);










