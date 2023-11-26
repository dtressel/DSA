// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/
// Difficulty: Medium
// Date Completed: 11/22/2023

// Description of Problem:
// Determine if a 9 x 9 Sudoku board is valid.
// Notes:
//    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//    Only the filled cells need to be validated according to the mentioned rules.

// Solution Time Complexity: 0(n^2)
// Solution Space Complexity: O(n)

// Solution:
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // test rows
  for (const row of board) {
      const occurances = new Set;
      for (const num of row) {
          if (num === '.') continue;
          if (occurances.has(num)) return false;
          occurances.add(num);
      }
  }
  // test columns
  for (let i = 0; i < 9; i++) {
      const occurances = new Set;
      for (const row of board) {
          if (row[i] === '.') continue;
          if (occurances.has(row[i])) return false;
          occurances.add(row[i]);
      }
  }
  // test boxes
  for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
          const occurances = new Set;
          for (let k = i; k < i + 3; k++) {
              for (let l = j; l < j + 3; l++) {
                  if (board[k][l] === '.') continue;
                  if (occurances.has(board[k][l])) return false;
                  occurances.add(board[k][l]);
              }
          }
      }
  }
  return true;
};