for(let i = 0;i<5;i++){//for loop
    console.log(i+1,"ANDAY\n");
}

//forin loop
let obj = {
    name:"BHINO",
    JOB:"Software Engineer"
}
for (const key in obj) {

        const element = obj[key];
        console.log(key," ",element);
    
}

//for-of loop

for (const c of "BHINO") {
    console.log(c);
}

//do-while
let a = 0;
do{
    
    console.log("Hello");
    a++;
}while(a<5);