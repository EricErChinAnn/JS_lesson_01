//ARRAY
//Array() == [] == an empty array
let notempty = [1,2,3,4,5,6];
let empty = Array();
console.log(notempty);

//values in a array can be changes
notempty[0] = -1;
console.log(notempty);

//Changing the array
notempty.push(9);
console.log(notempty);
//delete the last array
notempty.pop()
console.log(notempty);

//Splice
// takes in 2 argument,
//1st : the index to start deleting from
//2nd : how many to delete from the index
//3rd(optional) : new array to put in from the first argument

let names=[`a`,`b`,`c`,`d`,`e`,`f`,`g`];
console.log(names);
names.splice(2,2);
console.log(names);

let transferNames = [1,2];
names.splice(1,2,"trans1","trans2");
console.log(names);
names.splice(1,2,transferNames);
console.log(names);
