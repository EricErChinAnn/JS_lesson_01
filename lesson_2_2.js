const prompt = require("prompt-sync")();

let xyz =3;
// < condition > ? <wat to do if true> : <wat to do if false>
xyz > 0 ? console.log("positive") : console.log("negative"); 

let x = 3;
let y = 4;
let password = "rotiprata";

console.log(undefined || x);
// undefined||3
// 3

console.log(x == parseInt("2") + 1);
// 3 == 2 + 1
// 3 == 3
// true

console.log(y === prompt(""));
// 4 === "4"
// false

console.log(x == 4 ? 10 : 15);
// 3 == 4 ? 10 : 15
// false ? 10 : 15
// 15

console.log(x > 0 && y < 5 ? "yes" : "no");
// 3 > 0 && 4 < 5 ? "yes" : "no"
// true && true ? "yes" : "no"
// true ? "yes" : "no"
// "yes"

console.log((0 || y) && true);
// (0||4) && true
// 4 && true
// true

console.log(x + "" + y == 34);
// 3 + "" + 4 == 34
// "34" == 34 
// true

console.log(x > 0 ? x > 10 ? "A" : "B" : "C");
// 3>0 ? 3>10? "A" : "B" : "C"
// true ? false ? "A" : "B" : "C"
// "B"

console.log(password==='rotiprata' && x-4);
// "rotiprata"==="rotiprata" && 3 -4
// true && -1
// -1

console.log(x+1-y? "Ok" : "Not ok");
// 3+1-4 ? "Ok" : "Not Ok"
// false ? "Ok" : "Not Ok"
// "Not Ok"

console.log(password/3 ? "Ok" : "Not Ok");
// "rotiprata"/3 ? "Ok" : "Not Ok"
// NaN? "Ok" : "Not Ok"
// "Not Ok"

console.log(Math.sqrt(x-y) ? "Ok" : "Not Ok");
// Math.sqrt(3-4) ? "Ok" : "Not Ok"
// Math.sqrt(-1) ? "Ok" : "Not Ok"
// NaN ? "Ok" : "Not Ok"
// "Not Ok"