// What will the following code log to the console and why?
// Don't run the code until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// 'This is global'.On line 2 there is no variable declaration for myVar.
// As a result of this, JavaScript looks in the outer scope for the declaration.
// Since it doesn't exist, JavaScript binds myVar to be a "property" of the global object.
// This is "almost" the same as if myVar was globally declared. 
