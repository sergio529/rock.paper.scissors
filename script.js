//This function decides the computer choice in a proportion of 1/3 per option
function getComputerChoice(){
    let factor=Math.random();
    
    if (factor <= 1/3 ) {
        return 'Rock'
    }
    else if(factor <= 2/3){
        return 'Paper'
    }else{
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection){
    let result;
    if (playerSelection = /rock/i) {
        
    }
}

 function getPlayerSelection(){
    
}

let numberComputer=getComputerChoice();
console.log(numberComputer)
if (/rock/i.test(numberComputer)) {
        console.log('you rock')
}
else{
    console.log("You don't rock")
}