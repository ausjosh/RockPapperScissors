// create funtion "computerPlay"
// random number genorator 1= rock 2= papper 3=scissors
//console.log what comes up
function ran(min,max){
    return (Math.floor(Math.random() * (max - min + 1))+ min)
}

function computerPlay(){
    const num = ran(1,3)
    if (num === 1)
        return("rock")
    else if (num ===2)
        return("paper")
    else
        return ("scissors")                 
}
//Create Funtion "Player"
// promt for player to enter choice
//make choice case-insensitive 

function Player1(){
    const choice = prompt("rock paper or scissors")
if (choice.toLocaleLowerCase() === "rock")
    return ("rock")
else if (choice.toLocaleLowerCase() === "paper")
    return ("paper")    
    else
    return ("scissors")
}

// create funtion game play 
// must take in Player on selection & computer selection
// return who was the winner 

function gameplay(){
 const playerScore = 0
 const computerScore = 0
        
    for(i =0; i <5; i++){
        const comp = computerPlay()
        const play = Player1()
         
        if (comp === play){
            
         console.log ("this round is a draw");
        
        }else if (comp == "rock" && play == "scissors"){
            
            computerScore == computerScore+1;
         console.log ("computer choose rock! you Loose this round")
        }else if (comp == "scissors" && play == "paper"){
            
           computerScore== computerScore+1;
         console.log ("computer choose scissors! you Loose this round")
        }else if (comp == "paper" && play == "rock"){
            
           computerScore== computerScore+1;
         console.log ("computer choose paper! you Loose this round")
        }else if (comp == "scissors" && play == "rock"){
            
            playerScore== playerScore+1;
         console.log ("you win this round")
        }else if (comp == "paper" && play == "scissors"){
            
           playerScore== playerScore+1;
         console.log ("you win this round")
        }else if (comp == "rock" && play == "paper"){
            
            playerScore== playerScore+1;
         console.log ("you win this round")
        
    }
    }
    
   if (playerScore > computerScore)
        console.log ("computer score " + computerScore + " your score " + playerScore + " you loose")
    else
        console.log ("computer score " + computerScore + " your score " + playerScore +  " you win")    
}
// create a funtion fiveRound
//create a round counter
// have a loop run that starts a new round at the end of the old one
//
//have a count of who won the round
// have the game stop when the counter gets to 5
// alert who won 

