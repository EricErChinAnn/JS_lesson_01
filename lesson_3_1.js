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