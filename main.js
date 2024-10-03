
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArray){
    this._fieldArray = fieldArray;
  }

// Propmt the usrer for a move
// Make sure the move is possible
// E.g.: 'You can go down or right' ... in the starting position

// const prompt = require('prompt-sync')();

  print () {
// More sensibly we wouldn't assume the array size but would have a for loop
    console.log(this._fieldArray[0].join(' '));
    console.log(this._fieldArray[1].join(' '));
    console.log(this._fieldArray[2].join(' '));
    console.log(this._fieldArray[3].join(' '));  
    }
}

// Test it
const gameFieldOne = [
  [pathCharacter, fieldCharacter, fieldCharacter],
  [pathCharacter, fieldCharacter, hole],
  [hole, fieldCharacter, fieldCharacter],
  [hole, fieldCharacter, fieldCharacter],[fieldCharacter, hat, hole],
    ];

const myFieldOne = new Field(gameFieldOne);
myFieldOne.print();

const userName = prompt('What is your name Bob? ');
console.log(`Yo, ${userName}! How's it hangin'?`)

const playerMove = prompt('Please enter a move :');
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArray){
    this._fieldArray = fieldArray;
  }

// Propmt the usrer for a move
// Make sure the move is possible
// E.g.: 'You can go down or right' ... in the starting position

// const prompt = require('prompt-sync')();

  print () {
// More sensibly we wouldn't assume the array size but would have a for loop
    console.log(this._fieldArray[0].join(' '));
    console.log(this._fieldArray[1].join(' '));
    console.log(this._fieldArray[2].join(' '));
    console.log(this._fieldArray[3].join(' '));  
    }
}

// Test it
const gameFieldOne = [
  [pathCharacter, fieldCharacter, fieldCharacter],
  [pathCharacter, fieldCharacter, hole],
  [hole, fieldCharacter, fieldCharacter],
  [hole, fieldCharacter, fieldCharacter],[fieldCharacter, hat, hole],
    ];

const myFieldOne = new Field(gameFieldOne);
myFieldOne.print();

// Get user's name and greet
const userName = prompt('What is your name? ');
console.log(`Hello, ${userName}!`)

// Get player move and process

/* Do until either
1. win
2. player falls down a hole
3. player falls off the edge of the board

*/
// Game loop

let playerMove;
let gameOver = false;
do {
   (playerMove = prompt('Please enter a move, u[p], d[own] l[eft] or r[ight] or "X" to quit: '));
//   console.log(`You chose: ${playerMove}`);
} while (!gameOver && playerMove !== 'X')
// up
// down

// left & right
// decrement or increment the index of the inner array
// up and down
  switch (playerMove){
    case 'u':
      innerIndex --;
      break;
      if (innerIndex < 0  || innerIndex > innerArray.length ||outerIndex < 0  || outerIndex > outerArray.length) {
        gameOver;
      }

  }
// decrement or increment the index of the outer array
// if up or left and index < 0 - GAME OVER!
// if down or right and index > <ARRAY>.length - GAME OVER!
