// year, month, day, hours, minutes, seconds, milliseconds

// const currentDate = new Date();

// const currentDate = new Date(2026, 1, 22, 3, 30, 0, 0);
// console.log(currentDate);

const date = new Date();

const year = date.getFullYear();
// Adding 1 because getMonth() is zero-based (0 = January, 11 = December)
const month = date.getMonth() + 1;
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

// Displaying the current date and time components in real-time.
// The values shown below reflect the exact moment the program runs.
console.log(`Year: ${year}`); //Year: 2026
console.log(`Month: ${month}`); // Month: 1
console.log(`Hour: ${hours}`); // Hour: 3
console.log(`Minutes: ${minutes}`); // Minutes: 41
console.log(`Seconds: ${seconds}`); // Seconds: 14
console.log(`Milliseconds: ${milliseconds}`); // Milliseconds: 319

// Date to String
const newDate = new Date();
const dateString = newDate.toString();
console.log(dateString); //Thu Jan 22 2026 03:44:49 GMT+0500 (Pakistan Standard Time)

// Date to ISO String
console.log(newDate.toISOString()); //2026-01-21T22:46:43.331Z

// Date to Locale String
console.log(newDate.toLocaleString()); //1/22/2026, 3:47:37 AM

// Increment Date
newDate.setDate(newDate.getDate() + 1);
console.log(newDate); //2026-01-22T22:49:38.187Z
