/* 
    For every two empty bottles, you can get one free (full) bottle of pop
    For every four bottle caps, you can get one free (full) bottle of pop
    Each bottle of pop costs $2 to purchase


    Given the above parameters, write a program so that you can figure out 
    how many total bottles of pop can be redeemed given a customer investment. */

let input = process.argv.slice(2);

const bottles = {
  totalBottles: 0,
  totalEarned: {
    bottles: 0,
    caps: 0,
  }
}

const bottlesFromDollars = (invest) => {
  let startBottles = Math.floor(invest / 2)
  let bottleAcc = 0;
  let x = 0;
  let final;
  if (invest === 0) {
    return;
  } else {
    while (x < startBottles) {
      let temp = Math.floor(startBottles / 2)
      startBottles = temp;
      bottleAcc += temp;
      x++;
    }
    bottleAcc = startBottles % 2 === 1 ? bottleAcc + 1 : bottleAcc;
    final = bottleAcc + Math.floor(invest / 2);
    bottles.totalEarned.bottles += bottleAcc;
    bottlesFromDollars(bottleAcc);
  }
  bottles.totalBottles = bottles.totalEarned.bottles + invest/2;
}


const bottleCaps = () => {
  let startCaps = bottles.totalEarned.bottles
  let capAcc = 0;
  let x = 0;
  while (x < startCaps) {
    let temp = Math.floor(startCaps / 4);
    startCaps = temp;
    capAcc += temp;
    x++
  }

}

console.log(bottlesFromDollars(10))
console.log(bottles)