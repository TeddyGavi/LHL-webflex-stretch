let input = process.argv.slice(2);
const translated = [];

if (!input[0]) {
  console.log('USAGE: pig_latin.js arg1\nWhere arg1 is the word - or sentance to translate to Pig Latin.');
}

const pigLatinTranslator = (singleWord) => {
  return singleWord.slice(1, singleWord.length) + singleWord[0] + "ay";
}

for (const ele of input){
  translated.push(pigLatinTranslator(ele));
}

console.log(translated.join(" "));


//what about capitals -> should be made into lowerCase or numbers -> included or not?