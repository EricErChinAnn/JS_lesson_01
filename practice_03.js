const prompt = require("prompt-sync")();

// const weight = parseFloat(prompt("Enter your Weight: "));
// const height = parseFloat(prompt("Enter your Height: "));
// let bmi = weight/height**2;
// console.log("Your BMI: ", bmi);

function askForWeight(){
    const weight = parseFloat(prompt("Enter your Weight: "));
    return weight;
}

function askForHeight(){
    const height = parseFloat(prompt("Enter your Height: "));
    return height;
}

function calculateBMI(weight,height){
    return weight/height**2;   
}

function displayBMI(bmi){
    console.log(bmi);
}

const weight = askForWeight();
const height = askForHeight();
let bmi = calculateBMI(weight,height);
displayBMI();
