let score = 33;

console.log(typeof score);

//Here when a value of  variable is stored we cannot just simply look at it and tell whether it's a string or an integer
score = "33";

console.log(typeof score);

//with that said its clear that js is written dynamically and loosley, so to know the type of variable we use typeof in console.log argument /

score = "33abcd"

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// here when we asked for typeof valueInNumber it gave us the output --  Number(score) , but wehen asked for individual value of valueInNumber to see what output or value does it holds then we get a msg NaN (NOT A NUMBER )

let isLoggedIn = 1


let  booleanIsLogegdIn = Boolean(isLoggedIn)
console.log(booleanIsLogegdIn); 

// 1 => true ; 0 => false 
//"" => false  
// "Boston" => true

