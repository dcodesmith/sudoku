module.exports = {
  foundInRow: (board, row, number) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === number) {
        return true;
      }
    }
    
    return false;
  },

  foundInColumn: (board, column, number) => {
    for (let i = 0; i < 9; i++) {
      if (board[i][column] === number) {
        return true;
      }
    }

    return false;
  },
  
  foundInBox: (board, rowStart, columnStart, number) => {
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        if (board[row + rowStart][column + columnStart] === number) {
          return true;
        }   
      }
    }

    return false;
  }
};