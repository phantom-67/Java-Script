var button = document.querySelectorAll(".box");
var reset = document.querySelector(".reset-btn");
var turnO=false, win=false, count=0;
const winningPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];

button.forEach(function(block){
    block.addEventListener("click",function print() {
        if(turnO){
            block.innerText="O";
            turnO=false;
        }
        else{
            block.innerText="X";
            turnO=true;
        }
        block.disabled= true;
        count++;
        win=checkWinner();
        if(count==9 && !win){
            gameDraw();
        }
    })
});


function gameDraw(){
    console.log("Draw");
}

function checkWinner(){
    for(let pattern of winningPattern){
        let val1 = button[pattern[0]].innerText;
        let val2 = button[pattern[1]].innerText;
        let val3 = button[pattern[2]].innerText;
        
        if(val1!="" && val2!="" && val3!=null){
            if(val1===val2 && val2===val3){
                console.log("Winnner is :",val1);;
                return true;
            }
        }
    }
}

function reseting(){
    reset.addEventListener("click", function clean(){
        button.forEach(function(block){
            console.log("Cleaning display");
            block.innerHTML="";
            block.disabled=false;
        })
    });
}
