// 1. Create a function name (showCall Func)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holde value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn) {
  value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});
