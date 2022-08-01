 const stockPrices = [45, 24, 35, 31, 40, 38, 11];
//should return 16, as a buy at 24 and a sale at 40 = 16
//loop over list of prices and compare look at ((item+1) - item)
//store the largest value
//needs to be done for each value execpt the last one this would mean no profit so return -1 if no profit
//probably need recursion...



// unused function, was going to use this in the recursive solution
const isValid = (input) => {
  let valid = true;
  if (input.length === 0) {
    valid = false;
  } else {
    for (const item of input) {
      if (typeof item !== 'number') {
        valid = false;
      }
    }
  }
  return valid;
}

//keeps track of the potential profits looped once through the array
const maxProfit = (list) => {
  const result = [];
  let temp;
  let x = 0;
  //nested to loop to start at the left of an array subtracting each value and storing the largest
  while(x < list.length){
  for (let i = x; i < list.length; i++) {
    result.push(list[i] - list[x])
  }
  //find largest value and store that 
  temp = result.reduce((acc, curr) => acc > curr ? acc : curr);
  x++;
  }
  return temp <= 0 ? -1 : temp;
}

//this is an attempt at recursion, I couldn't come up with a way that wouldn't use a global variable,
//this caused problems when trying to assert the -1 case, as the global variable kept track of the previous value,
//I also didn't have the while loop included in the function above, and the fuction above was renamed to compare() 
// let profit = []; //problem here with a global variable!  
/* const maxProfit = (prices) => {
    if (prices.length !== 1) {
      profit.push(compare(prices));
      maxProfit(prices.slice(1));

    }
    const final = profit.reduce((acc, curr) => acc > curr ? acc : curr)
    return final <= 0 ? -1 : final;
  
} */
// console.log(compare(stockPrices))
// console.log(compare([0, 0, 0, 0, 0]));
// console.log(compare([45]))

module.exports = maxProfit
// module.exports = compare;