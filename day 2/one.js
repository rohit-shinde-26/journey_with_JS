let a = 90;
// let a = 89;   // not redclared
a = 67;  // update
// console.log(a);



const pi = 3.14;
// const pi = 788; it is not redeclared or updatable

// global scope 

var x = 90;
// console.log(x);
{
    var x = 67;
    // console.log(x);
}
// console.log(x);


// blocked scope
let b = 78;
{
    let b = 67;
    // console.log(b);
}
// console.log(b);


let m = 90;
let n = 89;

// m += n;

console.log(m);