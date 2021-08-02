// Write a function that takes two array arguments, each containing a list of numbers, 
// and returns a new array containing the products of all combinations of number pairs 
// that exist between the two arrays. The returned array should be sorted in ascending 
// numerical order.

// You may assume that neither argument will be an empty array.

function multiplyAllPairs(array1, array2) {
  let results = [];

  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j += 1) {
      results.push(array1[i] * array2[j]);
    }
  }

  return results.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]