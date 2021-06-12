const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_ALPHABET = LOWER_ALPHABET.toUpperCase();
const COMPLETE_LOWER_ALPHABET = LOWER_ALPHABET + LOWER_ALPHABET;
const COMPLETE_UPPER_ALPHABET = UPPER_ALPHABET + UPPER_ALPHABET;
const ROTATION = 13;

function rot13(string) {
  let rotatedString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (COMPLETE_LOWER_ALPHABET.includes(string[index])) {
      rotatedString += (COMPLETE_LOWER_ALPHABET[COMPLETE_LOWER_ALPHABET.indexOf(string[index]) + ROTATION]);
    } else if (COMPLETE_UPPER_ALPHABET.includes(string[index])) {
      rotatedString += (COMPLETE_UPPER_ALPHABET[COMPLETE_UPPER_ALPHABET.indexOf(string[index]) + ROTATION]);
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