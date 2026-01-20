// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["other array"], 123, true]
// 5. Now Access each item in that array by using [] notation.

const favSingers = ["The Weekend", "Atif Asalam", "Arijit Singh"];
console.log(favSingers[0]); //The Weekend

const favNumbers = [26, 9, 14];

const mixedArr = ["Hello", ["World", false], 123, true];
console.log(mixedArr[0]); //Hello
console.log(mixedArr[1]); // [ 'World', false ]
console.log(mixedArr[1][0]); //World
console.log(mixedArr[1][1]); //false
console.log(mixedArr[2]); //123
console.log(mixedArr[3]); //true
