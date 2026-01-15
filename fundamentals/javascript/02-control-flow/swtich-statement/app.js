// Switch Statement
// switch (expression)
// case x:
//  print
//  break;
// case y:
//  print
//  break;
//defualt:
//  print

let x = 1;
let bulb;

switch (x) {
  case 0:
    bulb = "off";
    console.log(bulb);
    break;
  case 1:
    bulb = "on";
    console.log(bulb);
    break;
  default:
    bulb = "not value found";
    console.log(bulb);
}

//ensure that no matter how the day is capitalized ("Monday", "monday", "MoNdAy")
let day = "Monday";

switch (day.toLowerCase()) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Don't know what day is today");
}
