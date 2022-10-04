//object
let student = {
    firstName :`Jon`,
    lastName : `Snow`,
    "continue" : true,
    getFullName : function()
        //the this from this.firstName refer to
        //the parent value that called the function.
        {return this.firstName+" "+this.lastName},
    address : {
        street: 227,
        postal : 541227,
        unit: "07-210",
    }
}

console.log(student.firstName);
console.log(student["continue"]);
console.log(student.getFullName());
console.log(student.address);
console.log(student.address.unit);

for(let k in student){
    console.log(k," ",student[k]);
}

//object.entries()
// this will change the data in the object into an array within an array
console.log(Object.entries(student));

//Object.values()  &  Object.keys()
//will push all the values or all the keys without the other into an array
console.log(Object.values(student));
console.log(Object.keys(student));

//  .hasOwnProperty()
//to check if the object have the Key = will return true or false
console.log(student.hasOwnProperty("firstName"));
console.log(student.hasOwnProperty("Name"));