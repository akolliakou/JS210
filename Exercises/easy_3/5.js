// Write another function that returns true if the string passed as an argument is a 
// palindrome, or false otherwise. This time, however, your function should be 
// case-insensitive, and should ignore all non-alphanumeric characters. 
// If you wish, you may simplify things by calling the isPalindrome function you wrote in 
// the previous exercise.

function isRealPalindrome(string) {
  let regex = /[^a-z0-9]/g;
  let charsArray = string.toLowerCase().replace(regex, '').split('');
  let reverseArray = charsArray.slice().reverse();

  for (let idx = 0; idx < charsArray.length; idx += 1) {
    if (charsArray[idx] !== reverseArray[idx]) {
      return false;
    }
  }

  return true;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
