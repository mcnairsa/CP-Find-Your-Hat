
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
