const prompt = require("prompt-sync")();

// let name = prompt("Enter a Name:    ")
// console.log("Dear",name,":\n\tI can't believe that it's been more than six months since we last spoke. You remember the song?\nShould auld acquaintance be forgot,\n\tand never brought to mind.\nShould auld acquaintance be forgot,\n\tand auld lang syne?\n\n\"Merry X'mas and a Happy New Year!\"");

//text literal starts with the backtick `
//can use empty spaces and can also use sp chara
//can also use variables in easily 
// everything inside ${} will be run as an evaluations
let loan = 300;
console.log(`Dear Killa,
    This is a new line with tab spacing./"'"'"";-::;
You still owe us $${loan}, you do not wish to have something bad happen to you right?`);

let string = `apple`;
console.log(string[3]);

//String Slicing
let line = `I am ok, I am fine, do not worry about me.`;
console.log(line.slice(4));
console.log(line.slice(4,18));

// A date can be represented as "DD-MM-YYYY", where DD is the day in two digits and MM is the month in two digits, and YYYY is the year in four digits.
// So for example, "23-10-1982" is 23 October 1982.
// Write a program that asks the user for a date in the "DD-MM-YYYY" format. After the user has entered the string, show the day, month and year as digits on seperate lines.

// Example Input: 
// 23-10-1982

// Example Output:
// 23
// 10
// 1982

let days = prompt("Enter the Day:   ");
let months = prompt("Enter the Month:   ");
let years = prompt("Enter the year:   ");

let date=String(days+months+years);

console.log(date);
months=parseInt(months);
const monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];


console.log(date.slice(0,2));
console.log(monthNames[months-1]);
console.log(date.slice(-4));

// The extension of a file is the last three alphabets in the filename after the period. So for example, the extension of the file "readme.doc" is doc.
// Write a program that asks the user for a file name, and check if the extension is a png or jpg. If so, print out that "It is an image file" or else print out "It is not an image file"

let file = prompt(`Enter file name:`);
if(file.slice(-3)==`jpg`||file.slice(-3)==`png`){
    console.log(`It is an image.`);
} else {
    console.log(`It is not an image.`);
}


console.log(file.split(`.`));