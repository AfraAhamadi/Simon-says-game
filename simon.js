let userseq = [];
let gameseq = [];
let started = false;
let level = 0;
let btns = ["olive","blueviolet","darksalmon","lightgreen"]
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}
function checkAnswer(idx){
    idx = userseq.length-1;
    if (userseq[idx] === gameseq[idx]){
       if(userseq.length == gameseq.length){
        setTimeout(levelUp,1000);
       } 
    }
    else{
        h2.innerHTML = `Game over! your score is <b>${level}</b> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },150)
        reset();

    }
    
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",function(){
        let btn = this;
        userFlash(btn);
        
        userColor = btn.getAttribute("id");
        userseq.push(userColor);
        console.log(userseq);

        checkAnswer(userseq.length-1);

    });
    function reset(){
        started = false;
        gameseq = [];
        userseq = [];
        level = 0;

    }
}