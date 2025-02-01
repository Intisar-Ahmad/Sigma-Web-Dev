let currenSong = new Audio();
let currfolder = '';
(async function firstfolder(){
    let a = await fetch("http://127.0.0.1:3000/songs");
    let div = document.createElement("div");
    div.innerHTML = await a.text();
    
    for (const element of div.querySelectorAll("a")) {
        if (element.href.includes("/songs")) {
            currfolder = (element.href.split("/").slice(-2)[0])
            main();
            break;
        }
    }
})();
 
async function getData(folder) {
    let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/`);
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    // console.log(as);

    let songs = [];
    for (const element of as) {
        if (element.href.endsWith("mp3")) {
            songs.push(element.href);
        }
    }
    return songs;
}
function playMusic(track) {
    let play = document.querySelector(".playinsong");
    play.setAttribute("src", "pause.svg");
    play.style.width = "18px"
    let vol = document.getElementById("vol")
    currenSong.volume = vol.value / 100;
    currenSong.src = track;
    currenSong.play();
    let songinfo = document.querySelector(".songinfo");
    songinfo.innerHTML = track.split(`/${currfolder}/`)[1].replaceAll(/%20|.mp3/g, " ");
}
async function main() {
    let songs = await getData(currfolder);
    let songUL = document.querySelector(".libararies ul");
    async function displayalbums() {
        let cardcliker = async (item) => {
        deletelist();
        currfolder = item.dataset.folder;
        songs = await getData(item.dataset.folder);
        makelist()
    }
        let a = await fetch("http://127.0.0.1:3000/songs");
        let div = document.createElement("div");
        div.innerHTML = await a.text();
        let anchors = []
        let cardcontainer = document.querySelector(".card-container");
        for (const element of div.querySelectorAll("a")) {
            if (element.href.includes("/songs") && !(element.href.includes(".mp3",".mp4","jpg","png","cpp","py","js"))) {
                anchors.push(element.href.split("/").slice(-2)[0])
            }
        }
        //appending the albums in card-container and creating cards
        for (const a of anchors) {
            let randimg = Math.round(Math.random() * (6-1) + 1)
            cardcontainer.innerHTML+=` <div data-folder="${a}" class="card">
            <div  class="play">
                <img  src="play.svg">
            </div>
            <img src="musicCover${randimg}.jpg" alt="lady">
            <h2>${a.replaceAll(/%20/g," ")}</h2>
           </div>`
        }
        let cards = document.querySelectorAll(".card");
        let playbuttons = document.querySelectorAll(".play");
        //adding event listeners to the albums
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("mouseover", () => {
                playbuttons[i].classList.add("appear");
            })
            cards[i].addEventListener("mouseleave", () => {
                playbuttons[i].classList.remove("appear");
            })
            cards[i].addEventListener("click", async (e)=>{
                await cardcliker(cards[i])
            })
            playbuttons[i].addEventListener("click",async (e)=>{
                e.stopPropagation();
                await cardcliker(cards[i])
                playMusic(songs[0]);
            })
        }
      
    }
    displayalbums();
    function makelist() {
        for (const song of songs) {
            let li = document.createElement("li");
            let str = song.split(`/${currfolder}/`)[1]
            li.innerHTML = `<div><img src = "headphones.svg"><div class = "info">${str.replaceAll(/%20|.mp3/g, " ")}</div></div> <div class = "playnow"><img src = "play.svg"> Play Now </div>`;
            li.innerHTML.trim();
            li.querySelector(".playnow").style.cursor = "pointer";
            let img = li.querySelectorAll("img");
            img[0].style.width = "15px";
            img[0].style.filter = "invert(1)";
            img[1].style.width = "15px";
            img[1].style.filter = "invert(1)";
            songUL.append(li);
            li.addEventListener("click", () => {
                playMusic(song);
            })
        }
    }
    makelist();


    function deletelist() {
        let lists = Array.from(document.querySelector(".libararies").getElementsByTagName("li"));
        for (let i = 0; i < lists.length; i++) {
            lists[i].remove();
        }
    }
    const playbtn = document.querySelector(".playinsong");
    const prevbtn = document.querySelector(".prev");
    const nextbtn = document.querySelector(".next");
    function PLAYIT() {
        if (currenSong.src == '') {
            playMusic(songs[0]);
        }
        else {
            if (currenSong.paused) {
                playbtn.setAttribute("src", "pause.svg");
                playbtn.style.width = "18px";
                currenSong.play();

            }
            else {
                playbtn.setAttribute("src", "play.svg");
                playbtn.style.width = "30px";
                currenSong.pause();

            }
        }
    }
    playbtn.addEventListener("click", PLAYIT);

    prevbtn.addEventListener("click", () => {
        if (currenSong.src != '') {
            if (currenSong.src == songs[0]) {
                playMusic(songs[songs.length - 1]);
            }
            else {
                for (let i = 1; i < songs.length; i++) {
                    if (currenSong.src == songs[i]) {
                        playMusic(songs[i - 1]);
                        break;
                    }
                }
            }
        }
    })

    nextbtn.addEventListener("click", () => {
        if (currenSong.src != '') {
            if (currenSong.src == songs[songs.length - 1]) {
                playMusic(songs[0]);
            }
            else {
                for (let i = 0; i < songs.length - 1; i++) {
                    if (currenSong.src == songs[i]) {
                        playMusic(songs[i + 1]);
                        break;
                    }
                }
            }
        }

    })
    let seekbar = document.querySelector(".seekbar");
    let circle = document.querySelector(".circle");
    currenSong.addEventListener("timeupdate", () => {
        circle.style.left = `${(currenSong.currentTime / currenSong.duration) * 100}%`;
        let songtime = document.querySelector(".songtime2");
        let seconds = Math.floor(currenSong.currentTime % 60);
        let minutes = Math.floor(currenSong.currentTime / 60);
        let Secondduration = Math.floor(currenSong.duration % 60);
        let Minuteduration = Math.floor(currenSong.duration / 60);
        if (minutes < 10 && seconds < 10) {

            songtime.innerText = ` 0${minutes}:0${seconds}/${Minuteduration}:${Secondduration}`;
        }
        else if (minutes >= 10 && seconds < 10) {
            songtime.innerText = ` ${minutes}:0${seconds}/${Minuteduration}:${Secondduration}`;

        }
        else if (minutes < 10 && seconds >= 10) {
            songtime.innerText = `  0${minutes}:${seconds}/${Minuteduration}:${Secondduration}`;
        }
        else if (minutes >= 10 && seconds >= 10) {

            songtime.innerText = `0${minutes}:0${seconds}/${Minuteduration}:${Secondduration}`;
        }
        if (currenSong.ended) {
            playbtn.setAttribute("src", "play.svg");
            playbtn.style.width = "30px";
            nextbtn.click()
        }
    })
    seekbar.addEventListener("click", (e) => {
        // console.log(e.offsetX)
        // console.log(seekbar.offsetWidth)
        let finalPercent = (e.offsetX / seekbar.offsetWidth) * 100;
        circle.style.left = `${finalPercent}%`;
        currenSong.currentTime = `${(finalPercent / 100) * currenSong.duration}`;
    })
    document.addEventListener("keydown", (event) => {
        if (event.code == 'Space') {
            PLAYIT();

        }
        if (currenSong.src != '') {
            //    console.log(event.key);

            if (event.key == 'ArrowLeft' && currenSong.currentTime != 0) {
                currenSong.currentTime -= 10;
            }
            else if (event.key == 'ArrowRight' && currenSong.currentTime != currenSong.duration) {
                currenSong.currentTime += 10;
            }
            else if (event.key == 'm') {

                let songtimeimg = document.querySelector(".songtime img");
                let vol = document.querySelector(".volume input")
                if (currenSong.volume != 0) {
                    currenSong.volume = 0;
                    songtimeimg.setAttribute("src", "mute.svg");
                    songtimeimg.style.width = "20px";
                }
                else {
                    currenSong.volume = vol.value / 100;
                    songtimeimg.setAttribute("src", "highvolume.svg");
                    songtimeimg.style.width = "20px";
                }
            }
        }

    })


    let volume = document.querySelector(".volume input");
    let volimg = document.querySelector(".volume img");
    volume.addEventListener("change", (e) => {
        currenSong.volume = e.target.value / 100;
        if (currenSong.volume >= 0.5) {
            volimg.setAttribute("src", "highvolume.svg");
            volimg.style.width = "20px";
        }
        else if (currenSong.volume <= 0.5 && currenSong.volume > 0) {
            volimg.setAttribute("src", "lowvolume.svg");
            volimg.style.width = "17px";
        }
        else {
            volimg.setAttribute("src", "novolume.svg");
            volimg.style.width = "12px";
        }
    })
}



let left = document.querySelector(".left")
let right = document.querySelector(".right");
let close = document.querySelector(".closeleft")
let open = document.querySelector(".openleft")
let mediaQuery = window.matchMedia("(max-width:800px),(orientation:portrait)");
if (mediaQuery.matches) {
    left.style.transition = "transform 0.5s linear 0s"
    left.style.transform = "translateX(-120%)";
    right.style.position = "absolute";
    right.style.width = "100vw";
    left.style.width = "70vw"
    let home = document.querySelector(".home");
    let insideclose = document.createElement("div");
    insideclose.innerHTML = "<img src='hamburger.svg' class='invert-colorandOpacity closeleft'>"
    insideclose.style.display = "flex";
    insideclose.style.alignItems = "center";
    insideclose.style.cursor = "pointer";
    insideclose.style.position = "absolute";
    insideclose.style.right = '10px';
    insideclose.style.top = '10px';
    home.append(insideclose);
    insideclose.addEventListener("click", () => {
        left.style.transform = "translateX(-120%)";
    })
}
let turn = 0;
close.addEventListener("click", () => {
    if ((!(mediaQuery.matches)) && turn <= 0) {
        left.style.transform = "translateX(-120%)";
        right.style.position = "absolute";
        right.style.width = "100vw";
        turn++;
    }
})
open.addEventListener("click", () => {
    if (mediaQuery.matches) {
        left.style.transform = "translateX(0%)"
        left.style.width = "70vw"
    }
    else {
        left.style.transform = "translateX(0%)"
        right.style.position = "relative";
        right.style.width = "75vw";
        turn--;
    }
})



