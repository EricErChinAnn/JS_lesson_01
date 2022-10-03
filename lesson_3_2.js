const prompt = require("prompt-sync")();

//String Manipulation
let line = `      The Black Sphinx Judge My Woe`;
//All upper case
console.log(line.toUpperCase());
//All lower case
console.log(line.toLowerCase());
//Remove empty space infront and back of string
console.log(line.trim());
//Replace "xxxx" with "yyyyy" (yyyyy can be an empty string)
console.log(line.replace(`Black`,`White`));


//String Checking
let sent = `The sky turn a crimson red and the sand darken by blood.`;
//return true if the parameter is true (is case sensitive and space is count as a character)
console.log(sent.includes("blood"));
// return the index of the sub-string (But it will only take the first one)
console.log(sent.indexOf(`blood`));

//String split function
// change input into an array but doesnt replace the original variable
let fruits = "apple,banana,cherry,durian,eppe"
console.log(fruits.split(`,`));