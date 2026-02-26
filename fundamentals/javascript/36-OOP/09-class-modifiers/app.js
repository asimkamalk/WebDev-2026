function MyClass(publicField, privateField, protectedField) {
  // Public Field

  this.publicField = publicField;

  //   Private Field (closure)

  const _privateField = privateField;

  //   Protected Field (closure)

  const _protectedField = protectedField;

  //   Public Method
  this.publicMethod = function () {
    console.log("Public Method: ", publicField);
  };

  //   Private Method (closure)
  function _privateMethod() {
    return `Private Method: ${_privateField}`;
  }

  //   Protected Method (closure)
  function _protectedMethod() {
    return `Protected Method: ${_privateField}`;
  }

  //   Method to access protected method
  this.accessProtectedMethod = function () {
    return _protectedMethod;
  };
}

const myObject = new MyClass("Public Data", "Private Data", "Protected Data");

// console.log(myObject.publicField);
// console.log(myObject._privateField);
// console.log(myObject._protectedField);

myObject.publicMethod();
// myObject.privateMethod();
// myObject.protectedField();

console.log(myObject.accessProtectedMethod());
