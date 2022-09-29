//type "yarn add prompt-sync" into the terminal
//and the code below to access the prompt function.
const prompt = require("prompt-sync")();

let w = parseFloat(prompt("Enter your Weight: (In Kg) "));
let h = parseFloat(prompt("Enter your Length: (In meter) "));

let bmi = (w/(h**2));

// console.log(bmi);

let x = 1;
let y = 2;
let z;

//Undefined
console.log(z)

//NaN - Not a Number (cause z is not define)
console.log(z+2);

//null has no value however can hold value if added to it
z = null;
console.log(z+2);

//Infinity
console.log(10/0);
