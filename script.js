// create funtion "computerPlay"
// random number genorator 1= rock 2= papper 3=scissors
//console.log what comes up
function ran(min,max){
    return (Math.floor(Math.random() * (max - min + 1))+ min)
}

function computerPlay(){
    const num = ran(1,3)
    if (num === 1)
        console.log("rock")
    else if (num ===2)
        console.log("papper")
    else
        console.log ("scissors")                 
}
//Create Funtion "Player"
// promt for player to enter choice
//make choice case-insensitive 

function Player1(){
    const choice = prompt("rock papper or scissors")
if (choice.toLocaleLowerCase() === "rock")
    console.log ("you choose rock")
else if (choice.toLocaleLowerCase() === "papper")
    console.log ("you choose papper")    
    else
    console.log ("you choose scissors")
}

// create funtion game play 
// must take in Player on selection & computer selection
// return who was the winner 

function gameplay(Player1,computerPlay){
 const comp = computerPlay()
 const play = Player1()
if (comp === play)
    console.log ("its a draw")
else if (comp == "rock" && play == "scissors")
    console.log ("computer wins")
else if (comp == "scissors" && play == "papper")
    console.log ("computer wins")
else if (comp == "papper" && play == "rock")
    console.log ("computer wins")
else if (comp == "scissors" && play == "rock")
    console.log ("you win")
else if (comp == "papper" && play == "scissors")
    console.log ("you win")
else if (comp == "rock" && play == "papper")
    console.log ("you win")
}

//random comment