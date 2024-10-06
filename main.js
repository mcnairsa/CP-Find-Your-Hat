let prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


// Create the game board
const gameFieldOne = [
  [pathCharacter, fieldCharacter, fieldCharacter],
  [pathCharacter, fieldCharacter, hole],
  [hole, fieldCharacter, fieldCharacter],
  [hole, fieldCharacter, fieldCharacter],[fieldCharacter, hat, hole],
    ];

// Define class Field
class Field {
  constructor(fieldArray){
    this._fieldArray = fieldArray;
  }
// Print method of class Field
//    prints the current state of the game board
  print () {
// More sensibly we wouldn't assume the array size but would have a for loop
    console.log(this._fieldArray[0].join(' '));
    console.log(this._fieldArray[1].join(' '));
    console.log(this._fieldArray[2].join(' '));
    console.log(this._fieldArray[3].join(' '));  
    }
}

// Instantiate the Field object
const myFieldOne = new Field(gameFieldOne);
myFieldOne.print();

// Get user's name and greet
// const userName = prompt('What is your name? ');
// console.log(`Hello, ${userName}!`)


// Propmt the user for a move
// Make sure the move is possible
// E.g.: 'You can go down or right' ... in the starting position

// Get player move and process

/* Do until- either
1. win
2. player falls down a hole
3. player falls off the edge of the board

*/
// Game loop

let playerMove;
let i = 0;
let j = 0;
let playerPosition = [i, j];
let gameOver = false;
do {
   (playerMove = prompt('Please enter a move, u[p], d[own] l[eft] or r[ight] or "X" to quit: '));
//   console.log(`You chose: ${playerMove}`);

// up
// down

// left & right
// decrement or increment the index of the inner array
// up and down
  switch (playerMove){
    case 'u':
      i--;
      break;
    case 'd':
      i++;
      break;
    case 'l':
      j--;
      break;
    case 'r':
      j++;
      break;
    case 'X':
      gameOver = true;
      break;
    default:
    console.log('Not a legal input...')
  }
    if (i < 0  || i > 3 || j < 0  || j > 2) {	
        console.log('Sorry you screwed up. Goodbye.');
        gameOver;
      }
// prompt = '';
  
// decrement or increment the index of the outer array
// if up or left and index < 0 - GAME OVER!
// if down or right and index > <ARRAY>.length - GAME OVER!

} while (!gameOver && playerMove !== 'X')
