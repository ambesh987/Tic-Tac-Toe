console.log("welcome to tic tac toe");
let music=new Audio("intro.mp3")
let audioturn = new Audio("ding.mp3");
let gameover= new Audio("intro.mp3");
let turn ="X";
let gameOver=false;
//function to change the turn
const changeturn=()=>{
    return turn ==="X"?"0":"X";
}

//function to check for a win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    win.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+ " Won";
            gameOver=true;
            music.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="300px"
        }
    })

}
//Main Logic for game

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=changeturn();
            audioturn.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
            }
           
        }
    })
})
resizeTo.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e=>{
        e.innerText="";

    });
    turn ="X";
    gameOver=false;
    document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="300px"
    
})