let input = process.argv.slice(2);
 //this is the given solution with split and join
/* const reverse = (original) => {
  return original.split('').reverse().join('');
};
console.log(reverse(input)); */

// reverse without using join:
const reverseMe = (stringToReverse) => {
  const asString = stringToReverse.toString();
  let reversed = "";
  for (let i = asString.length - 1; i >= 0; i--) {
    reversed += asString[i];
  }
  return reversed;
};

// this function calls the reverseMe function for each item in the inpur array and
// returns the result without the last line break.
const reversedWithCommandLineArguments = (input) => {
  let eachStringReversed = "";
  for (const ele of input) {
    eachStringReversed += reverseMe(ele) + "\n";
  }
  return eachStringReversed.slice(0, -1);
};
console.log(reversedWithCommandLineArguments(input));