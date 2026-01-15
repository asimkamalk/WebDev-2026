// A do-while loop always runs the first iteration, as the condition is checked *after* the loop body executes.

let i = 1;

do {
  console.log(i, "Hello World");
  i++;
} while (i <= 10);
