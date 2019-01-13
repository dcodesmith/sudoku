const prettify = require('./prettify');
const { foundInRow, foundInColumn, foundInBox } = require('./helpers');

class SudokuSolver {
  constructor(board) {
    this.board = board;
  }

  getNextEmptyCell() {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (this.board[row][column] === 0) {
          return [ row, column ];
        }
      }
    }

    return [];
  }

  isNumberAssignable(row, column, number) {
    const board = this.board;
    const rowStart = row - row % 3;
    const columnStart = column - column % 3;

    return !foundInRow(board, row, number) &&
      !foundInColumn(board, column, number) &&
      !foundInBox(board, rowStart, columnStart, number)
  }

  isComplete() {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (this.board[row][column] === 0) {
          return false;
        }
      }
    }
  
    return true;
  }

  isSolved() {
    if (this.isComplete(this.board)) {
      return true;
    }
  
    const [ row, column ] = this.getNextEmptyCell();

    for (let number = 1; number <= 9; number++) {
      if (this.isNumberAssignable(row, column, number)) {
        this.board[row][column] = number;

        if (this.isSolved()) {
          return true;
        }

        this.board[row][column] = 0;
      }
    }
    
    return false;
  }

  start() {
    if (this.isSolved()) {
      console.log(prettify(this.board));
    }
  }
}

module.exports = SudokuSolver;