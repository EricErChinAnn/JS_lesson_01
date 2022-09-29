const prompt = require("prompt-sync")(); //Allow sheet to use prompt

//Write a function that takes in two integer arguments, and return their multiplication. 
function multi(x,y){
    return x*y;
}
console.log(multi(10,20));

//Write a function that takes in speed and time as arguments, and return the distance.
function dist(spd,time){
    return spd*time;
}
console.log(dist(300,0.1));

//Write a function that can calculate the perimeter of a rectangle.
function perimeterOfRect(len,bre){
    return ((len+bre)*2);
}
console.log(perimeterOfRect(20,30));