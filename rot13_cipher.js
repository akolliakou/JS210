const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = LOWER.toUpperCase();
const COMPLETELOWER = LOWER + LOWER
const COMPLETEUPPER = UPPER + UPPER
const ROTATION = 13

function rot13(string) {
  let rotatedString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (COMPLETELOWER.includes(string[index])) {
      rotatedString += (COMPLETELOWER[COMPLETELOWER.indexOf(string[index]) + ROTATION]);
    } else if (COMPLETEUPPER.includes(string[index])) {
      rotatedString += (COMPLETEUPPER[COMPLETEUPPER.indexOf(string[index]) + ROTATION]);
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