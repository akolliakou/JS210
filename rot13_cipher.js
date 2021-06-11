const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = LOWER.toUpperCase();
const COMPLETE_LOWER = LOWER + LOWER;
const COMPLETE_UPPER = UPPER + UPPER;
const ROTATION = 13;

function rot13(string) {
  let rotatedString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (COMPLETE_LOWER.includes(string[index])) {
      rotatedString += (COMPLETE_LOWER[COMPLETE_LOWER.indexOf(string[index]) + ROTATION]);
    } else if (COMPLETE_UPPER.includes(string[index])) {
      rotatedString += (COMPLETE_UPPER[COMPLETE_UPPER.indexOf(string[index]) + ROTATION]);
    } else {
      rotatedString += string[index];
    }
  }

  return rotatedString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// Teachers open the door, but you must enter by yourself.
console.log(rot13("':-%~"));
// ':-%~