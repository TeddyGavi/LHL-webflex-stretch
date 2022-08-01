for (let i = 100; i <= 200; i++){
  if (i % 3 === 0 && i % 4 ===0){
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0)   {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}

 function loopyLighthouse(range, multiples, words){ 
  const  start = range[0];
  const end = range[1]; 
  const oneDiv = multiples[0];
  const twoDiv = multiples[1];
  const word1 = words[0];
  const word2 = words[1];
  for(let i = start; i <= end; i++){
    if (i % oneDiv === 0 && i % twoDiv === 0){
      console.log(word1 + word2);
    } else if (i % oneDiv === 0)   {
      console.log(word1);
    } else if (i % twoDiv === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
} 


//for ( let i = 0; i < 100;) 
//console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);

/*Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

    range should be an array of 2 numbers representing the start and end values for the loop.
    multiples should be an array of 2 numbers representing the multiples you want to replace with words.
    words should be an array of 2 strings representing the words that will replace the multiples.


    loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

    The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon". 
    */