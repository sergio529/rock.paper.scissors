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
    if (/rock/i.test(playerSelection)) {
        if(/rock/i.test(computerSelection)){
            return 'Draw! rock draws rock'
        }
        else if (/scissor/i.test(computerSelection)){
            return 'You win! Rock beats Paper'
        }
        else if (/paper/i.test(computerSelection)){
            return 'You lose!, Paper beats Rock'
        }
    }
    if (/paper/i.test(playerSelection)) {
        if(/rock/i.test(computerSelection)){
            return  'You win! Paper beats Rock'
        }
        else if (/scissors/i.test(computerSelection)){
            return 'You lose!, Scissors beats Paper'
        }
        else if (/paper/i.test(computerSelection)){
            return 'Draw! Paper draws Paper'
        }
    }
    if (/scissors/i.test(playerSelection)) {
        if(/rock/i.test(computerSelection)){
            return   'You lose!, Rock beats Scissors'
        }
        else if (/scissors/i.test(computerSelection)){
            return 'Draw! Scissors draws Scissors'
        }
        else if (/paper/i.test(computerSelection)){
            return 'You win! Scissors beats Paper'
        }
    }
}

 function getPlayerSelection(){
    
}

let numberComputer=getComputerChoice();
console.log(numberComputer)
