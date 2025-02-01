

nice("BHINO");

function sum(a,b,c=3/*This is an optional parameter Also called default parameter*/ ){
    console.log(a+b+c);
    return a+b+c;
}
function nice(name){
    console.log("Hey",name,"What's up?");
    sum(name,name);
}

let result = sum("fu","ck","ing");

console.log("The sum is",result);