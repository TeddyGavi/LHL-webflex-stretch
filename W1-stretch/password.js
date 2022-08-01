let passInput = process.argv[2];
const obfuscate = (password) => {
  const passSplit = password.toString().split("");
  for (const letter of passSplit){
     if (letter === "a") {
      passSplit.splice(passSplit.indexOf("a"), 1, "4");
    } else if (letter === "e") {
      passSplit.splice(passSplit.indexOf("e"), 1, "3");
    } else if (letter === "o"){
      passSplit.splice(passSplit.indexOf("o"), 1, "0");
    } else if (letter === "l"){
      passSplit.splice(passSplit.indexOf("l"), 1, "1");
    } 
  } 
  return passSplit.join("");
}

const obfuscateStr = (strPassOnly) => {
  const strPass = strPassOnly.toString();
  let passObf = "";
  for (let i = 0; i < strPass.length; i++){
    if (strPass[i] === "a"){
      passObf += "4";
    } else if (strPass[i] === "e") {
      passObf += "3";
    } else if (strPass[i] === "o") {
      passObf += "0";
    } else if (strPass[i] === "l") {
      passObf += "1";
    } else {
      passObf += strPass[i];
    }
  }
  return passObf;
}
const obfuscateMap = (passWord) => {
    passSplit.map(function(letter, index) {
    if (letter === "a") {
      passSplit[index] = "4";
    } else if (letter === "e") {
      passSplit[index] = "3";
    } else if (letter === "o"){
      passSplit[index] = "0"
    } else if (letter === "l"){
      passSplit[index] = "1"
    }
  }) 
  return passSplit.join("");
}



/*  const test = [1, 2, 3, 4];
for (let i in test){
  console.log( `This is a for-in ${i}`);
}

for (let i of test){
  console.log(`this is a for-of ${i}`);
}
 */

console.log(obfuscateStr(passInput));
console.log(passInput)
console.log(...passInput);