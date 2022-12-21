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

const player1Board = []
const player2Board = []

let turnCounter = 2
let result = 'x'


const alternatePlayer = () => {
    if (turnCounter % 2 === 0) { 
        return 'o'
    } else {  
        return 'x'
    }   
}

const disableClick = () => {
    event.target.pointerEvents = 'none'
}

const updateResult = () => {
    result = alternatePlayer()
}

const hidePlayerText = () => {
    if (result === 'o') {
        player2.style.display = 'block'
        player1.style.display = 'none'
    } else {
        player1.style.display = 'block'
        player2.style.display = 'none'
    }
}

const pushToArray = (i) => {
    if (result === 'x'){
        player2Board.push(event.target.value = i)
    } else {
        player1Board.push(event.target.value = i)
    }
}

for(let i = 0; i < 9; i++){
    const square = document.createElement('div')
    square.classList.add('board')
    square.setAttribute('id', i)
    gameBoard.appendChild(square)
    square.value = i
    
    

    square.addEventListener('click', () => {
        playerClick(result)
        updateResult()
        hidePlayerText()
        turnCounter++
        pushToArray(i)
        checkWinCondition()
        
    })
} 

const playerClick = (text) => {
    event.target.innerText = text
}

const winCondition = [
   ['0','1','2'],
   ['3','4','5'],
   ['6','7','8'],
   ['0','3','6'],
   ['1','4','7'],
   ['2','5','8'],
   ['0','4','8'],
   ['2','4','6']
]

const checkWinCondition = () => {
    winCondition.filter((board)=>{
        player1Board.includes(board)
        return true
    })
    const compareBoard2 = winCondition.filter((board)=>{
        player2Board.includes(board)
        return true
    })

    
    if(compareBoard1 === true) {
        console.log('player1 wins')
    }
    if(compareBoard2 === true) {
        console.log('player2 wins')
    }
}