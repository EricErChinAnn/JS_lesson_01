//filtering an array
let names = [`Zeo`,`Yeo`,`Xeon`,`Winstons`,`Violette`,`Ulyssess`];
let longNames = []
for(let n of names){
    if(n.length>5){
        longNames.push(n);
    }
}
console.log(longNames);

//using filtering to do what's above

let results = names.filter(function(value,index){
    //return true/false based on our conditions
    if(value.length>5){
        return true;
    } else {
        return false;
    }
})

console.log (results);