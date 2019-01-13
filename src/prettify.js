const chalk = require('chalk');

module.exports = function prettify(board) {
  for (let index = 0; index < board.length; index++) {
    let row = index + 1;
    const horizontalGreenLine = makeGreenLine('- - - - - - - - - - - - - - - -');
   
    if (row === 1) {
      console.log(horizontalGreenLine);
    }
  
    console.log(split(board[index]));
   
    if (row % 3 === 0) {
      console.log(horizontalGreenLine);
    }
  }
}

const makeGreenLine = chalk.bold.green;

function split(array) {
  let newArry = [];

  for (let index = 0; index < array.length; index++) {
    let row = index + 1;

    if (row === 1) {
      newArry.push(makeGreenLine('| '));
    }

    newArry.push(array[index]);

    if (row % (array.length/3 )=== 0 && row !== array.length) {
      newArry.push(makeGreenLine(' | '));
    }

    if (row === array.length) {
      newArry.push(makeGreenLine(' |'));
    }
  }
  
  return newArry.join(' ');
}