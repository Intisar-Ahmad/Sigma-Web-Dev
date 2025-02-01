let textdiv = document.querySelector(".text");
 function randomtext(str,num){
    let rand = Math.round((Math.random() * (7000 - 1000) + 1000));
    console.log(rand);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let newdiv = document.createElement("div");
            newdiv.classList.add(`text${num}`);
            textdiv.append(newdiv);
            newdiv.innerText = str;
            resolve("Success");
        },rand);
    })
}

async function setvalues(){
    await randomtext("Initializing Hacking....",1);
    await randomtext("Reading Files....",2);
    await randomtext("Password files detected...",3);
    await randomtext("Sending your personal data to server...",4);
    await randomtext("Cleaning Up...",5);
}
setvalues();