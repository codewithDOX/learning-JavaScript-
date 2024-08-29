const name = "Valorant"
const repoCount = 50

//console.log( name + repoCount + "Value"); outdated synatx avoid using it 

//for this we uses backtciks " `` " in coporated by string interpolations

//String interpolation in JavaScript is a way to embed expressions within string literals, allowing you to create dynamic strings. Instead of concatenating strings with variables or expressions, string interpolation makes the code more readable and easier to write.

console.log(`Hello the game i play is ${name} and my repo count is ${repoCount}`); // much more readable and insdustry accepted 

const movieName = new String('dead-Poet-Society')

console.log(movieName[0]); //key value pair accessing, which means when we give input to our strings then it gives some sort of key pairing value of numbers to each word we use as in input to our strings 

console.log(movieName.__proto__); // to know the prototype

console.log(movieName.length);
console.log(movieName.toUpperCase()); // Outputs the string in all uppercase letters. The original string `movieName` remains unchanged because strings in JavaScript are immutable. The `toUpperCase()` method returns a new string, which is stored separately in memory.
console.log(movieName.charAt(2)); // Character at index 2
console.log(movieName.indexOf('t')); // Index of the first occurrence of character 't'
 
const newStrings = movieName.subStrings( 0 , 4)
console.log(newStrings);

const anotherString = movieName.slice ( -8,4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim()); // by impelementing trim the extra spaces are trimmed  rrim start and end also exists 

const url = "https://valorant.com/valorant%20gammer"
console.log(url.replace('%20', '-' ));

console.log(movieName.split('-')); // This will split on the basis of dashes 




