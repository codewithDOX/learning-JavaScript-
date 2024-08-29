//============== MEMORIES ===============//

// Stack memory  -----> used in -------> Primitive
// Heap memory ------> used in -------> Non primitive 

//Stack Memory in JavaScript
//Stack Memory is used for managing function calls and local variables. When a function is invoked, a new "stack frame" is created in the stack memory. This stack frame contains information like the function's parameters, local variables, and the return address. When the function exits, its stack frame is popped off the stack, freeing up that memory.

//Heap Memory in JavaScript
//Heap Memory is used for dynamic memory allocation. Objects and other complex data types are allocated in the heap, which isn't as strictly organized as the stack. The heap is where the larger or more complex variables live, and the references to these variables are stored in the stack


// stack example 

let myYoutubecName = "rondraw's"
let anothername = myYoutubecName
anothername = "artbynoviceron"

console.log(myYoutubecName);
console.log(anothername);

// it's like a function we where a 
// stack ----> user -----> Heap
let user  = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = user

userTwo.email = "aldehyde@google.com"

console.log(user.email);
console.log(userTwo.email);