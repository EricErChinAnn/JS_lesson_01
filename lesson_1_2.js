console.log("Hello");

//const and let are function to declare a value
// however const cannot be reassigned to.

const x = [1,2,3];
//x = [4,5,6]; //ressigning
console.log(x);

//however const can be editted
x.push(4);
x[0]=0;
console.log(x);

const fruit=["apple","banana","cherry"];
let f2 = fruit;
fruit.push("dork");
console.log(fruit);
console.log(f2);

function multi(z){
    z=z*2;
    console.log(z)
    return z;
}

multi (20);