const prompt = require("prompt-sync")();

let x = 3;
let y = 4;
let z = 0;
let a = 1;
let password = "rotiprata";
let email = "";

console.log(x && y); //&& always take the last truthly value if there are not false value
// 3 && 4
// 4

console.log(email || password);
// ""||"rotiprata"
// "rotiprata"

console.log(parseInt(password) || y);
// parseInt("rotiprata") || 4
// NaN || 4
// 4

console.log(y - a - x && 10);
// 4 - 1 - 3 && 10
// 0 && 10
// 0

console.log(y && true && password == "rotiprata");
// 4 && true && "rotiprata" == "rotiprata"
// 4 && true && true
// true && true
// true

console.log(z + a || x + y);
// 0 + 1 || 3 + 4
// 1 || 7
// 1

console.log(email && password);
// "" && "rotiprata"
// ""