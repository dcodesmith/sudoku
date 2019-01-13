const assert = require('assert');
const SudokuSolver = require('./SudokuSolver');

const inCompleteBoard = [
  [8, 1, 0, 4, 0, 0, 0, 0, 3],
  [9, 0, 0, 0, 5, 0, 8, 4, 0],
  [5, 4, 0, 0, 3, 0, 0, 6, 0],
  [0, 0, 0, 5, 4, 2, 0, 0, 0],
  [0, 0, 0, 7, 0, 3, 9, 2, 5],
  [2, 3, 0, 9, 8, 0, 0, 0, 1],
  [4, 9, 2, 0, 0, 0, 1, 0, 6],
  [0, 0, 8, 0, 6, 0, 0, 0, 0],
  [0, 0, 7, 2, 0, 0, 0, 5, 0]
];

const completeBoard = [
  [8, 7, 6, 4, 2, 9, 5, 1, 3],
  [9, 2, 3, 6, 5, 1, 8, 4, 7],
  [5, 4, 1, 8, 3, 7, 2, 6, 9],
  [7, 1, 9, 5, 4, 2, 6, 3, 8],
  [6, 8, 4, 7, 1, 3, 9, 2, 5],
  [2, 3, 5, 9, 8, 6, 4, 7, 1],
  [4, 9, 2, 3, 7, 5, 1, 8, 6],
  [3, 5, 8, 1, 6, 4, 7, 9, 2],
  [1, 6, 7, 2, 9, 8, 3, 5, 4]
];

let sudokuSolver;

describe('SudokuSolver', () => {
  describe('Given a Sudoku board', () => {
    describe('and the board incomplete', () => {
      before(() => {
        sudokuSolver = new SudokuSolver(inCompleteBoard);
      });

      it('should return false', () => {
        assert.equal(sudokuSolver.isComplete(), false);
      });

      it('should have the 3rd column of the 1st row empty', () => {
        const [ row, column ] = sudokuSolver.getNextEmptyCell();
        assert.equal(row, 0);
        assert.equal(column, 2);
      });
    });

    describe('and the board is complete', () => {
      before(() => {
        sudokuSolver = new SudokuSolver(completeBoard);
      });

      it('should return true', () => {
        assert.equal(sudokuSolver.isComplete(), true);
      });
    });
  });
});
