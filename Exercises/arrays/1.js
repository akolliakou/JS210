// Read through the code shown below. What does it log to the console at lines 8 and 12?

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop(); // [1, 2, 3]
console.log(myArray); // [1, 2, 3]
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2];
console.log(myArray); // [1, 2]
console.log(myOtherArray); // [1, 2, 3]