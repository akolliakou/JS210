// Modify the function from the previous exercise so that it ignores 
// non-alphabetic characters when determining whether a letter should be 
// upper or lower case. Non-alphabetic characters should still be included in 
// the output string, but should not be counted when determining the appropriate case.

function staggeredCase(string) {
  let charsArray = string.split('');

  return charsArray.map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"