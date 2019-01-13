var assert = require('assert');
const { foundInRow, foundInColumn, foundInBox } = require('./helpers');

const board = [
  [8, 0, 0, 0, 0, 0, 0, 0, 3],
  [9, 0, 0, 0, 5, 0, 8, 4, 0],
  [5, 4, 0, 0, 3, 0, 0, 6, 0],
  [0, 0, 0, 5, 4, 2, 0, 0, 0],
  [0, 0, 0, 7, 0, 3, 9, 2, 5],
  [2, 3, 0, 9, 8, 0, 0, 0, 1],
  [4, 9, 2, 0, 0, 0, 1, 0, 6],
  [0, 0, 8, 0, 6, 0, 0, 0, 0],
  [0, 0, 7, 2, 0, 0, 0, 5, 0]
];

let actual;

describe('foundInRow', () => {
  describe('Given a 2D array', () => {
    let row, number;

    describe('and the number 2 is searched for in the first row', () => {
      before(() => {
        row = 0;
        number = 2;
        actual = foundInRow(board, row, number);
      });

      it('should not be found in the row', () => {
        assert.equal(actual, false);
      });
    });

    describe('and the number 4 is searched for in the fifth row', () => {
      before(() => {
        row = 4;
        number = 2;
        actual = foundInRow(board, row, number);
      });

      it('should be found in the row', () => {
        assert.equal(actual, true);
      });
    });
  });
});

describe('foundInColumn', () => {
  describe('Given a 2D array', () => {
    let column, number;

    describe('and the number 2 is searched for in the second column', () => {
      before(() => {
        column = 1;
        number = 2;
        actual = foundInColumn(board, column, number);
      });

      it('should not be found in the column', () => {
        assert.equal(actual, false);
      });
    });

    describe('and the number 9 is searched for in the seventh column', () => {
      before(() => {
        column = 6;
        number = 9;
        actual = foundInColumn(board, column, number);
      });

      it('should be found in the column', () => {
        assert.equal(actual, true);
      });
    });
  });
});

describe('foundInBox', () => {
  describe('Given a 2D array', () => {
    let row, rowStart, columnStart, column, number;

    describe('and the number 4 is searched for in the 3x3 grid starting at row 3 and column 6', () => {
      before(() => {
        row = 4;
        column = 8;
        rowStart = row - row % 3;
        columnStart = column - column % 3;
        number = 4;
        actual = foundInBox(board, rowStart, columnStart, number);
      });

      it('should not be found in the box', () => {
        assert.equal(actual, false);
      });
    });

    describe('and the number 6 is searched for in the 3x3 grid starting at row 3 and column 6', () => {
      before(() => {
        row = 8;
        column = 6;
        rowStart = row - row % 3;
        columnStart = column - column % 3;
        number = 6;
        actual = foundInBox(board, rowStart, columnStart, number);
      });

      it('should be found in the box', () => {
        assert.equal(actual, true);
      });
    });
  });
});