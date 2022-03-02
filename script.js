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
 const comp = computerPlay()
 const play = Player1()
if (comp === play)
    console.log ("its a draw")
else if (comp == "rock" && play == "scissors")
    console.log ("computer choose rock! you Loose")
else if (comp == "scissors" && play == "paper")
    console.log ("computer choose scissors! you Loose")
else if (comp == "paper" && play == "rock")
    console.log ("computer choose paper! you Loose")
else if (comp == "scissors" && play == "rock")
    console.log ("you win")
else if (comp == "paper" && play == "scissors")
    console.log ("you win")
else if (comp == "rock" && play == "paper")
    console.log ("you win")
}

//random comment