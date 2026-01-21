// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.
// There are two types of scopes in JavaScript.
// Global Scope variables are those declared outside of a block.
// Local Scope variables are those declared inside of a block.

// Example of global variable
let textMessage = "hi";
//let textMessage; //SyntaxError: Identifier 'textMessage' has already been declared
console.log(textMessage); //hi

// Example of local variable

// {local scope}

{
  let textMessage2 = "hello";
  console.log(textMessage2); // hello

  console.log(textMessage); //h1 //global variables can be accessible here
}

// console.log(textMessage2); //Error: textMessage2 is not defined

function showMessage() {
  let textMessage = "Hello from local var"; //local var
  console.log(textMessage);
}

showMessage();

for (let i = 1; i <= 5; i++) {
  console.log(i); //Local variable
}
// console.log(i); //Error: i is not defined
