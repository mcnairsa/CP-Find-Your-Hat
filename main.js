let prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Class Field
//    the constructor takes a 2d array 'field' i.e. the game board as input

class Field {
  constructor(fieldArray){
    this._fieldArray = fieldArray;
  }
    
// Print method of class Field
//    prints the current state of the game board

    print () {
// display the 'field' to the user console
// More sensibly we wouldn't assume the array size but would have a for loop
	console.log(this._fieldArray[0].join(' '));
	console.log(this._fieldArray[1].join(' '));
	console.log(this._fieldArray[2].join(' '));
	console.log(this._fieldArray[3].join(' '));
	console.log(this._fieldArray[4].join(' '));
    } // method .print() of Class Field

    static generateField(height, width){
	// takes parameters height and width for the filed array
	// we may add input the percentage of holes
	// nothing to see here yet
	// we're generating the field by hand
	
    } // method .generateField of Class Field

    playGame(){
	// Make sure the move is possible
	// E.g.: 'You can go down or right' ... in the starting position

	// Get player move and process

	// let playerMove;
	let i = 0;
	let j = 0;
	let maxI = 4;
	let maxJ = 2;
	let playerPosition = [i, j];
	let illegalInput = false;
	let playerMove ='';
	
	let gameOver = false;
// Game loop
	/* Do until- either
	   1. win
	   2. player falls down a hole
	   3. player falls off the edge of the board
	*/
  
	// decrement or increment the index of one the game arrays
	// if up or left and index < 0 - GAME OVER!
	// if down or right and index > <array-name>.length - GAME OVER!
	do {
	    (playerMove = prompt('Please enter a move, u[p], d[own] l[eft] or r[ight] or "X" to quit: '));
	    // left & right
	    // decrement or increment the value of i
	    // up & down
	    // decrement or increment j

	    switch (playerMove){
	    case 'u':
		i--;
		if (i < 0) {illegalInput = true};
		break;
	    case 'd':
		i++;
//		if (i > wTf.length) {illegalInput = true};
		if (i > maxI) {illegalInput = true};
		break;
	    case 'l':
		j--;
		if (j < 0) {illegalInput = true};
		break;
	    case 'r':
		j++;
// 		if (j > wTf2) {illegalInput = true}
		if (j > maxJ) {illegalInput = true}
		break;
	    case 'X':
		gameOver = true;
		break;
	    case 'P':
		this.print();
	    default:
		console.log('Valid moves are:  u[p], d[own] l[eft], r[ight], "P" to repaint the field or "X" to quit...') // player entered something stupid
	    } // switch

	    console.log(`Value of playerMove, i, j is, this._fieldArray([i][j]: ${playerMove}, ${i}, ${j}`);
	    
	    if (gameOver){
		console.log('Thanks for playing. Good Bye...'); // Player exited game
	    } else if (illegalInput) {          // move outside of board	
		console.log('Not a legal input...')
		console.log('Sorry you screwed up. Goodbye.');
       		gameOver = true;
	    } else {
		switch (this._fieldArray[i][j]){
		case fieldCharacter:
		    this. _fieldArray[i][j] = pathCharacter;
		    break;
		case hole:
		    console.log('You fell down a hole...')
		    console.log('... such a shame! Goodbye.');
		    gameOver = true;
		    break;
		case hat:
		    console.log('WooHoo! You found it! \n You know what they say: If you want to get ahead get a hat. Well you got a hat so go forth and achieve great things!');
		    gameOver = true;
		    break
		default:
					 }
	    } // not player exit or out of bounds so process the input
	    this.print();
	} while (!gameOver)

    } // method .playGame() of Class Field
    
} // Class Field

// Create a field array to be passed to the object when we instantiate
Field.generateField();

// Create the game board
//     we shall replace this with the .generateFiled()method

const gameFieldOne = [
  [pathCharacter, hole, fieldCharacter],
  [fieldCharacter, fieldCharacter, hole],
  [hole, fieldCharacter, hole],
  [fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, hat, hole],
  ];



// Instantiate the Field object
const myFieldOne = new Field(gameFieldOne);
myFieldOne.print(); // Display the starting board
myFieldOne.playGame(); // play the game

// Get user's name and greet
// const userName = prompt('What is your name? ');
// console.log(`Hello, ${userName}!`)



