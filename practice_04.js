const prompt = require("prompt-sync");

// console.log vs return
// cosole.log just show on screen
// return will store the value for future use

function display(){
    console.log(123);
}

// this is called PASS BY VALUE
//use return if u wan x = 13
function foo(x){
    x=x+3
}
x=10;
foo(x);
console.log(x);


function bar(y){
    y.push(6);
}
y=[1,2,3,4,5];
bar(y);
console.log(y);
