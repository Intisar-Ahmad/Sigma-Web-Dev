async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This is settimeout");
            resolve(45);

        },1000)
    })
}
 (async function main(){//this is an IIFE an Imediately Invoked Function Expression//Can't be invoked again;
     let a = await sleep();
     let b = await sleep();
 })

 //Destructuring
 let [x,y] = [1,5];//this is correct
//  let x,y = [1,5];//this is incorrect

//also
// let [a,b,...rest] = [1,2,3,4,5,6,7,8];
// console.log(a,b,rest);

//inobjject
// let obj = {a:1,b:2,c:3};
// let {a,b} = obj;
// console.log(a,b);

//spreadoperator
let array = [1,2,3,4]
console.log(...array);