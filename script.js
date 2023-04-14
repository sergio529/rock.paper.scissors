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

// PlayRound function decides who wins  between two selections.
function playRound(playerSelection, computerSelection){
    let result;
    if (/rock/i.test(playerSelection)) {
        if(/rock/i.test(computerSelection)){
            return 'Draw! rock draws rock'
        }
        else if (/scissor/i.test(computerSelection)){
            return 'You win! Rock beats scissors'
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


//Game function created to initialize the game for 5 games
function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Chose!');
        let computerSelection = getComputerChoice();
        
        
        result = playRound(playerSelection,computerSelection);
        console.log(result)
        if(/You win/.test(result)){
            playerPoints ++;
           
        }else if(/You lose/.test(result)){
            computerPoints ++;   
        }       
    }
    
    let winner = (playerPoints>computerPoints)?'You WIN!': (computerPoints>playerPoints)?'You Lose!':'You Draw';
    console.log('Final Results: ')
    console.log( 'Player Score:' + playerPoints )
    console.log( 'Computer Score:' + computerPoints )
    console.log(winner);
}
game();