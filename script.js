// create funtion "computerPlay"
// random number genorator 1= rock 2= papper 3=scissors
//console.log what comes up
const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')
const winner = document.querySelector('#winner')
const start = document.querySelector('#start')
const round = document.querySelector('#round')

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


let humanScore = 0
let computerScore = 0

 function Player1(){
     
     
     btnRock.addEventListener('click', ()=>{
         if (computerPlay() == 'rock'){
            round.textContent = ('its a draw!!')
            start.textContent = ('')
         }else if (computerPlay() == 'scissors'){ 
            round.textContent = ('you win!')
            humanScore = humanScore +1
            winner.textContent =( 'you score is ' + humanScore + ' computer score is ' + computerScore)
            start.textContent = ('')
            firstToFive()
            }else{
            round.textContent = ('you loose!!')
            computerScore + computerScore+1
            winner.textContent =( 'you score is ' + humanScore + ' computer score is ' + computerScore)
            start.textContent = ('')
            firstToFive()
        }
     })
     btnPaper.addEventListener('click', ()=>{
        if (computerPlay() == 'paper'){
            round.textContent = ('its a draw!!')
            start.textContent = ('')
        }else if (computerPlay() == 'scissors'){ 
            round.textContent = ('you win!')
            humanScore = humanScore +1
            winner.textContent =( 'you score is ' + humanScore + ' computer score is ' + computerScore)
            start.textContent = ('')
            firstToFive()
           }else{
            round.textContent = ('you loose!!')
            computerScore = computerScore+1
            winner.textContent =( 'you score is ' + humanScore + ' computer score is ' + computerScore)
            start.textContent = ('')
            firstToFive()
        }
    })
     btnScissors.addEventListener('click', ()=>{
        if (computerPlay() == 'scissors'){
            round.textContent = ('its a draw!!')
            start.textContent = ('')
        }else if (computerPlay() == 'paper'){ 
            round.textContent = ('you win!')
            humanScore = humanScore +1
            winner.textContent =( 'you score is ' + humanScore + ' computer score is ' + computerScore)
            start.textContent = ('')
            firstToFive()
           }else{
            round.textContent = ('you loose!!')
            computerScore = computerScore+1
            winner.textContent =( 'you score is ' + humanScore + ' computer score is ' + computerScore)
            start.textContent = ('')
            firstToFive()
        }
    })
    
 }
 

 function firstToFive(){
 
     
        

 if (humanScore == 4 || computerScore == 4){
    if(humanScore > computerScore){
    start.textContent = ('game over you win!')
        humanScore = 0
        computerScore = 0
    }else{
        start.textContent = ('game over you loose!')
        humanScore = 0
        computerScore = 0
    }
    
}
        
 }
 Player1()



 

