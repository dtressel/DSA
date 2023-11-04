// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/
// Difficulty: Medium

// Description of Problem:
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Description of Solution:
// 

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const resultsArr = [];
  const buildParenthesis = (arr, openParenNum) => {
      if (openParenNum < n) {
          arr.push('(');
          buildParenthesis(arr, openParenNum + 1);
          arr.pop();
      }
      if (arr.length < openParenNum * 2) {
          arr.push(')');
          buildParenthesis(arr, openParenNum);
          arr.pop();
      }
      if (n * 2 === arr.length) {
          const str = arr.join('');
          resultsArr.push(str);
      }
  }
  buildParenthesis(['('], 1);
  return resultsArr;
};