// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirst Name, favActor Last Name)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store My favorite Actor Is (favActorName) & say something about your fav actor name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley.
// 7. Now Log your Message.

let favActorFirstName = "Tom";
let favActorLastName = "Cruise";

let fullName = favActorFirstName.concat(" ", favActorLastName);
console.log(fullName); //Tom Cruise

let upperCase = fullName.toUpperCase();
console.log(upperCase); //TOM CRUISE

let message = `My favorite actor is ${upperCase}`;
let message2 = `My favorite actor is ${fullName.toUpperCase()}`;
console.log(message); //My favorite actor is TOM CRUISE
console.log(message2); //My favorite actor is TOM CRUISE

// Append
message += " and his best show is Mission Impossible";
console.log(message); //My favorite actor is TOM CRUISE and his best show is Mission Impossible

console.log(message);
