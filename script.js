let count1 = 0;
let count2 = 0;
document.querySelector(".scr1").textContent = "0";
document.querySelector(".scr2").textContent = "0";
let restartAudio=new Audio("./sound/Restart.mp3");
let tossAudio=new Audio("./sound/toss.mp3");
addEventListener("keydown", function (e) {
    if(e.key==="Enter"){
        tossAudio.play();
        this.document.querySelector(".box").style = " visibility: visible";
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector(".scr1").textContent = ++count1;
        document.querySelector("h1").style.textAlign = "center";
        document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {

        document.querySelector(".scr2").textContent = ++count2;
        document.querySelector("h1").style.textAlign = "end";
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
        document.querySelector("h1").style.textAlign = "center";
    }
    }

})



document.body.getElementsByClassName("reset")[0].addEventListener("click", function (e) {
    tossAudio.play();
    document.querySelector(".box").style = " visibility: visible";
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector(".scr1").textContent = ++count1;
        document.querySelector("h1").style.textAlign = "center";
        document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {

        document.querySelector(".scr2").textContent = ++count2;
        document.querySelector("h1").style.textAlign = "end";
        document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
        document.querySelector("h1").style.textAlign = "center";
    }

})

document.querySelector(".restart").addEventListener("click", (e) => {
    restartAudio.play();

    count1 = 0;
    count2 = 0;
    document.querySelector("h1").style.textAlign = "center";
    document.querySelector("h1").textContent = "Press Enter or toss button to Start";
    document.querySelector(".box").style = " visibility: none";
    document.querySelector(".scr1").textContent = "0";
    document.querySelector(".scr2").textContent = "0";
});