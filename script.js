let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice = () =>{
const options=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};

const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp");



const drawGame = ()=>{
    
    msg.innerText="it's a draw";
    msg.style.backgroundColor ="black";
};
const showWinner=(userWin,userChoice,compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You won! Your ${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};



const playGame=(userChoice)=>{
const compChoice=genCompChoice();


if(userChoice===compChoice){
    // draw
    drawGame();
}
else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }


};




choices.forEach((choice)=> {
choice.addEventListener("click",() =>{
    const userChoice=choice.getAttribute("id");
 playGame(userChoice)
});
});

