const prompt = require("prompt-sync")();

// let count = 0;
// let sum = 0;
// let number = parseInt(prompt("Enter the Numbers, stop by entering 0:    "));
// while (number != 0){
//     sum = sum + number;
//     count = count + 1;
//     number = parseInt(prompt("Enter the Numbers, stop by entering 0:    "));
// }
// console.log("Average: ",sum,"/",count,"/", sum/count);


//for loop useage
let fruits = ["apple","banana","cherry"];
//++i is the same as i = i+1
for(let i = 0; i<fruits.length; ++i){
    console.log(fruits[i]);
}

//  break; and continue; can interupt the flow of a loop
//  break; will end the loop
//  continue; will restart the loop from the top

let count = 0;
let sum= 0;

while(true){
    let number = parseInt(prompt("Enter the number: To stop enter 0 "));
        if (number == 0) {
        break;   
        }
    sum = sum + number;
    ++count;
}

console.log(sum, "/", count, "=", sum/count);