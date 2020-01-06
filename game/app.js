/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, activePlayer, dice;
initialize();
// floor will remove the decimal on a number in js so 4.6 = 4
// dice = Math.floor(Math.random() * 6) + 1; 
console.log(dice); 
// querySelector only selector only selects first elemetn that it finds like how we do in css
// below, type coercion will make it #current-0
// document.querySelector('#current-' + activePlayer).textContent = dice;  // this sets value
// textContent  can only set text as seen above
// but to change/ use  html use innerHTML
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

let x = document.querySelector('#score-0').textContent; // this gets the value 

// use query selector to change css

// ****** EVENT AND EVENT HANDLING  ****** *****
// Events: Notifications that are sent to notify the  code that something happened on the page
// exampels - clicking button, resizing window, scrolling down , pressing a key,
// Event Listener = function that performs an action based on a certain event. it waits for a specific event to happen.

/* remember when doing this there's the execution stack that goes through function calls utnil global execution
context,   then you have the Message queue where all the Events are put
These events are only processed once the execution stack is done 
about to get into 
event handler set up, call back function , anonymous function , how to change image

function btn() {
    // do the thing
}
here btn is a callback function, it's a function that we pass back into another function
document.querySelector('.btn-roll').addEventListener('click', btn)
if didn't want to have the callback, just use an anonymous function 
*/


document.querySelector('.btn-roll').addEventListener('click', function() { 
    //1. Random number
    let dice = Math.floor(Math.random() * 6) + 1;
    //2. display result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3.update round score if the rolled number was NOT a 1
    if (dice !== 1) {
        // Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // below code would've been repeated so put into a function
        nextPlayer(); 
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to Global Score
    scores[activePlayer] += roundScore; // scores[activePlayer] = scores[activePlayer] + roundScore;

    // update the ui 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer(); 
    }
    // Next Player
    nextPlayer(); 
})

function nextPlayer() {
           // Next Player
        // use ternary operator    
        activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
        roundScore = 0; 

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.dice').style.display = 'none'; 
};

document.querySelector('.btn-new').addEventListener('click', initialize);

function initialize() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementsById('score-0').textContent = '0';
    document.getElementsById('score-1').textContent = '0';
    document.getElementsById('current-0').textContent = '0';
    document.getElementsById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
};