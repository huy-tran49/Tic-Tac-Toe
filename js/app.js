// A user should be able to click on different squares to make a move.
// --- make 9 squares, gives div id, give eventlistener for each div
// Every click will alternate between marking an X and O
// --- display turn player, alternate player 2 , turn counter variable, alternate marking x and o
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
// A cell should not be able to be replayed once marked.
// --- disable div once it has been clicked
// You should not be able to click remaining empty cells after the game is over.
// --- disable all divs when a player win
// Add a reset button that will clear the contents of the board.
// --- reset divs, reset counter 
// Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// --- code win condition, 
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// --- add game finished variable
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
// Have Fun - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.
const gameBoard = document.querySelector('#game-board')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')

const turnCounter = 1

for(let i = 0; i < 9; i++){
    const square = document.createElement('div')
    square.classList.add('board')
    square.setAttribute('id', i)
    gameBoard.appendChild(square)
    square.addEventListener('click', () => {
        
    })
} 

const playerOneClick = () => {
    event.target.style.backgroundColor = 'rgb(0, 153, 51)'
    turnCounter++
}

const playerTwoClick = () => {
    event.target.style.backgroundColor = 'rgb(102, 0, 255)'
    turnCounter++
}

