// console.log("Hello World")

// var a = 16 , b  = 15;

// console.log(a%b,a/b);
//  var c = "BHINO";
//  var d = 'w';

// console.log(typeof a,typeof b,typeof c,typeof d)

// const a1 = 6;
// a++;
// // a1 = a1 + 1; not possible in JS
// console.log(a1);
// console.log(a);

// let x = 3;
// x++;
// // console.log(x,"This is so stupid")
// let a = 3;
// console.log(a);

// if(a==3){
//     // let a = 66 a is no the same from outside it is a different one;
//     // a = 66; a is the same a from outside and is being overridden
//     let b = a+1;
//     console.log(b);
//     console.log(a); // When the above two statements are commented out this will print 3 as a is a global variable right now but if the frist statement is active this will print 66 and the next will print 3 becuase this "let a " is diffrent from the outside and if the second statement is active this will still print 66 but the outside one will also print 66
// }

// console.log(a) 

//7 primitive datatypes are

// let n  = null;
//  let n = Number;
//  let n = BigInt;
//  let n = Boolean;
//  let n = String;
//  let n = Symbol;
// n = undefined//default

 let x = "harry";
 let y = 22;
 let c = 3.5;
 let v = true;
 let f = null;
 let bigint =  100000000000000000000000000n;
console.log(x,y,c,v,f,bigint);
console.log(typeof x,typeof y,typeof c,typeof v,typeof f,typeof bigint);


let o = {
    "name": "BHINO" , "JOB f":"Web Developer"
}
console.log(o);

o.salary = "1 lac";
o["JOB f"] = "Software Engineering";
console.log(o);