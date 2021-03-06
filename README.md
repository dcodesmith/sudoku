#### Instructions
- Clone this repository
- Install the node modules: `npm i`
- Run the tests to make sure everything passes: `npm t`
- To run the sudoku solver, run: `npm start`

#### Documentation

- First, we check if the board is complete. If so, it prints the solved sudoku to the terminal in a way that's easily understood.
- If the board is not complete
  - Get for the next empty cell
  - Loop through numbers 1 to 9 and check if each number is assignable to the empty cell by checking the cells row, column and it's containing 3 x 3 grid.
  - If it assignable, provisionally assign the number to the empty cell.
  - If the sudoku puzzle is solved return true. If not, it resets the current cell (row,column) to it's original value.
  - This operation is performed recursively until all the cells are filled.

![Solved Sudoku](https://github.com/dcodesmith/sudoku/blob/master/sudoku.png)


#### Possible Improvements

- Make sudoku board dynamic e.g. `N x N` all the way up to 9.
- A few more tests.
- Would be fun render this as a HTML page without libraries or frameworks.
