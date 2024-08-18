    // ============//  Story of Var , let , const //==========

// constant's or const is the keypword declare a constant variable , which means it's value cannot be reassigned after it's Set .//
// SYNTAX //

const accountId = 34567
// accountId = 2 // not allowed

//`var` is a keyword in JavaScript used to declare variables. It's less preferred nowadays because it has function scope and can lead to confusing bugs due to its hoisting behavior. `let` and `const` are preferred because they have block scope, which helps avoid these issues.//
//SYNTAX//

var accountPassword = "12345"

//let is a keyword in JavaScript used to declare variables with block scope, meaning the variable is only accessible within the block where it's defined, "can be reassigned"//
//SYNTAX//

let accountEmail= "giligili23@gmail.com"
let accountCity = "Boston"

//after you have assigned the let and var(less use) you don't need to declare it again jsut assign the new value except for const //

//examples//
accountEmail = "wwe23@gmail.com"
accountPassword = "454566"
accountCity = "Houston" 

//to Run the program , cmd node var/let/const.js or yourfilename.js//

//you can get the output either by intializing each and every keyword on console.log() or just type console.table([]) and define them in brackets //
console.log(accountId);
console.log(accountEmail);
console.table([accountPassword, accountEmail,accountId ]);  
 

