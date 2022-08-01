/* Write a function check, which, 
given a number, returns whether it is valid or not
 (according to the Luhn Algorithm). */


//first check valid input 
//has to contain no alphanumeric charaters!!
//then get the number to str if it isn't already
//store the last digit as the check digit
// return input minus the last digit
//loop over this input muliplying  each number
//store the values in a sum
//use the sum to calculate 10-((sum % 10)) = checkDigitValid
// if the checkDigitValid === check digit, input is valid


const isValid = (input) => {
  if (typeof input === "string") {
    if (input.search(/[a-zA-Z$&+,:;=?@#|'<>.^*()%!-]/g) > 0) {
      // console.log(input.search(/[a-zA-Z$&+,:;=?@#|'<>.^*()%!-]/g))
      return false;
    }
  } else if (typeof input === "number") {
    return true;
  } else if (input === undefined) {
    return false;
  }
  return true;
}


const check = (Idnum) => {
  let result = 0;
  const notValid = "Please enter a valid number of numbers only";
  let sum1 = 0;
  let sum2 = 0;
  const digits = Idnum.toString().split("").map(x => Number(x));
  const lNum = digits.length;
  const givenCheckDigit = digits[lNum - 1];
  const payLoad = digits.slice(0, -1);
  if (isValid(Idnum)) {
    if (lNum % 2 === 0) {
      for (let i = 0; i < payLoad.length; i += 2) {
        let tempSum = 0;
        tempSum += payLoad[i] * 2
        if (tempSum > 9) {
          sum1 = tempSum - 9;
        } else {
          sum1 += tempSum;
        }
      }
      for (let i = 1; i < payLoad.length; i += 2) {
        sum2 += payLoad[i];
      }
      result = sum1 + sum2;
      //wrap in own function, have i as the input to callback function
      //or use map
    }

    else if (lNum % 2 !== 0) {
      for (let i = 1; i < payLoad.length; i += 2) {
        let tempSum = 0;
        tempSum += payLoad[i] * 2
        if (tempSum > 9) {
          sum1 += tempSum - 9;
        } else {
          sum1 += tempSum;
        }


      }
      for (let i = 0; i < payLoad.length; i += 2) {
        sum2 += payLoad[i];
      }
      result = sum1 + sum2;

    }

    console.log(result % 10)
    return (10 - (result % 10)) === givenCheckDigit;
  } else {
    return false;
  }
}






const checkLuhn = (number) => {
  let digits = number.toString().split("").map(x => Number(x));
  if (isValid(number)) {
    if (digits.length % 2 === 0) {
      digits = digits.map((num, i) => i % 2 === 0 ? num * 2 : num)
    } else {
      digits = digits.map((num, i) => i % 2 === 1 ? num * 2 : num)
    }

    digits = digits.map((num) => num > 9 ? num - 9 : num)
    const sum = digits.reduce((acc, curr) => acc += curr, 0)

    return sum % 10 === 0;
  }
  else {
    return false
  }
}

console.log(checkLuhn(79927398713));
console.log(checkLuhn(49927398717));

module.exports = check
module.exports = checkLuhn