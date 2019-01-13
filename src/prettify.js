module.exports = function prettify(board) {
  for (let index = 0; index < board.length; index++) {
    let row = index + 1;
  
    if (row === 1) {
      console.log('- - - - - - - - - - - - - - - -');
    }
  
    console.log(split(board[index]));
   
    if (row % 3 === 0) {
      console.log('- - - - - - - - - - - - - - - -');
    }
  }
}


function split(array) {
  let newArry = [];

  for (let index = 0; index < array.length; index++) {
    let row = index + 1;

    if (row === 1) {
      newArry.push('| ');
    }

    newArry.push(array[index]);

    if (row % (array.length/3 )=== 0 && row !== array.length) {
      newArry.push(' | ');
    }

    if (row === array.length) {
      newArry.push(' |');
    }
  }
  
  return newArry.join(' ');
}