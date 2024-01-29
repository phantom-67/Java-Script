var userscore=0;
var compscore=0;

const choices = document.querySelectorAll(".option");

function compChoice(arr){

    var randIdx = Math.floor(Math.random()*3);
    return arr[randIdx];
}

function printMessage(result,computerChoice){
    var message = document.querySelector(".spin");
    if(result==="You Win"){
        message.style.backgroundColor="green";
        message.innerHTML=`You Win, Computer pick ${computerChoice}`;
    }
    else if(result==="Draw!"){
        message.style.backgroundColor="black";
        message.innerHTML=`Game Draw, Computer pick ${computerChoice}`;
    }
    else{
        message.style.backgroundColor="red";
        message.innerHTML=`You Lose, Computer pick ${computerChoice}`;
    }
}

function drawGame(computerChoice){
    console.log("Game draw.")
    printMessage("Draw!",computerChoice);
}

function winner(userWin,computerChoice){

    if(userWin){
        console.log("You Win");
        userscore++;
        document.getElementById("user-score").innerText = userscore;
        printMessage("You Win",computerChoice)

    }else{
        console.log("Computer Win");
        compscore++;
        document.getElementById("comp-score").innerText = compscore;
        printMessage("Computer Win",computerChoice);
    }
}
 
function playGame(userChoice){
    arr = ["rock","paper","scissor"];
    var computerChoice=compChoice(arr);
    if(userChoice===computerChoice){
        drawGame(computerChoice);
    }
    else{
        userWin = true;
        if(userChoice==="rock"){
            userWin = computerChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin = computerChoice==="scissor" ? false:true;
        }
        else {
            userWin = compChoice==="rock" ? false:true;
        }
        winner(userWin,computerChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        var userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});
