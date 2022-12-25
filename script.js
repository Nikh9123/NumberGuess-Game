'use strict';
/*
//use # for id selection although this is a class thats why i use . as selctor
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//variables as global scope 
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20 ;
let highScore =Number(document.querySelector('.highscore').textContent);
alert('Enter the numbers between range');
// document.querySelector('.number').textContent = secretNumber;

const displayMessage= function(message){
    document.querySelector('.message').textContent = message ;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof (guess), guess);

        //wrong input 
        if (!guess) {
            displayMessage( ' ⛔ No Number ! ')
        }

        //when player wins
        else if (guess === secretNumber) {
           displayMessage ( '🎉Correct Number!');
            document.querySelector('.number')
            .textContent = secretNumber;
           
            document.querySelector('body').
            style.backgroundColor = '#60b347';
            document.querySelector('.number').
            style.width = '30rem';
           
            if(highScore < score){
                highScore = score ;
                document.querySelector('.highscore').
                textContent = highScore ;
               }
        }
//when guess is wrong
        else if(guess != secretNumber){
            if(score > 1){
                // document.querySelector('.message').
                // textContent =  guess > secretNumber ? '📈Too high!' :'📉Too Low!';
                score-- ;
                displayMessage(guess > secretNumber ? '📈Too high!' :'📉Too Low!')
                document.querySelector('.score')
                .textContent = score;
    
                }else {
                   displayMessage(' 💥You Lose Game !');
                    document.querySelector('.score').textContent = 0;
                }
        }

        
    });

    document.querySelector('.again').addEventListener
    ('click', function () {
        
        score = 20 ;
        secretNumber = Math.trunc(Math.random() * 30) + 1;
        
        // document.querySelector('.message').textContent = '🤔 Start guessing...';
        displayMessage('🤔 Start guessing...');
        document.querySelector('.score').textContent = score ;
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        

    });
















