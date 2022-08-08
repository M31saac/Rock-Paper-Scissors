//Computer Choice Function
function getComputerChoice(){
    let choice=Math.floor(Math.random()*3)
    switch(choice){
        case 0:
            choice='rock';
        break;
        case 1:
            choice='paper';
        break;
        case 2:
            choice='scissors';
        break;
        default:
            console.log("invalid choice");
        break;
    }
return choice;
}
//Player Choice Function
function getPlayerChoice(){
    let playerChoice=prompt("Your Choice:");
    if(typeof(playerChoice)=='string' && playerChoice.toLowerCase()=='rock'||'paper'||'scissors'){
        return playerChoice.toLowerCase(); 
    }
    else{
        console.log("Invalid input")
        getPlayerChoice();
    }
}
//Play Round Function
function playRound(playerSelection,computerSelection){
    score='';
    if (playerSelection==computerSelection){
        console.log("Tie! You both chose",playerSelection);
        score='tie';
    }
    else if(playerSelection=='rock'&& computerSelection=='paper'){
        console.log("You lose! "+computerSelection+ " beats "+playerSelection);
        score='lose';
    }
    else if(playerSelection=='rock' && computerSelection=='scissors'){
        console.log("You win! "+playerSelection+" beats "+computerSelection);
        score='win';
    }
    else if(playerSelection=='paper' && computerSelection=='scissors'){
        console.log("You lose! "+computerSelection+" beats "+playerSelection);
        score='lose';
    }
    else if(playerSelection=='paper' && computerSelection=='rock'){
        console.log("You win! "+playerSelection+" beats "+computerSelection);
        score='win';
    }
    else if(playerSelection=='scissors' && computerSelection=='rock'){
        console.log("You lose! "+computerSelection+" beats "+playerSelection);
        score='lose'
    }
    else if(playerSelection=='scissors' && computerSelection=='paper'){
        console.log("You win! "+playerSelection+" beats "+computerSelection);
        score='win';
    }
    return score;
}
//Game function loops and plays 5 rounds, prints the score
function game(){
    let loses=0;
    let wins=0;
    let ties=0;
    let gameLog={}
    let playerSelection
    let computerSelection
    for(let i=0;i<5;i++){
        playerSelection=getPlayerChoice();
        computerSelection=getComputerChoice();
        score=playRound(playerSelection, computerSelection);
        if(score=='win'){
            wins++;
        }
        else if(score=='lose'){
            loses++;
        }
        else if(score=='tie'){
            ties++;
        }
    }
    gameLog.wins=wins;
    gameLog.loses=loses;
    gameLog.ties=ties;
    console.log(gameLog);
}
//Main Program invokes "game()" Function
game();



