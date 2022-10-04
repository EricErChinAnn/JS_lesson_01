//function use as a value
function compare(a,b){
    if(a==b){ return 0; }
    if(a<b){ return -1; }
    else {return 1;}
}

let array = [10,2,8,9,3,4,5,6,7,1];
array.sort();
console.log(array); //without our compare function

console.log(array.sort(compare));//compare function is a call-back function

let circleArea = (r) => { return r**2 } // this is a arrow function

//functional programming, try to do function without using for or while.

//Mapping
// take one element from the SOURCE array
// edit it and put it into a DESTINATION array
let name = [`Able`,`Bible`,`Cable`,`Dynle`,`Fyrle`];
let bigName = [];

for(let n of name){
    let uppercase = n.toUpperCase();
    bigName.push(uppercase);
}
console.log(bigName);

//using mapping to do what u did above
//.map( function( value, index ){})
let ans = name.map(function(value,index){
    return value.toUpperCase();
})
console.log(ans);