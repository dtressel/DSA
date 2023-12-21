// 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/
// Difficulty: Hard
// Date Completed: 12/20/2023

// Description of Problem:
// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Solution:
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  // exclude any trailing opening paranthesis
  let lastRelevantIdx = s.length - 1;
  while (s[lastRelevantIdx] === '(') {
      lastRelevantIdx--;
  }
  // test for valid parens starting at each index
  let longestValid = 0;
  let testIdx = 0;
  // test while longestValid is less than potential longest from test index
  while (longestValid < lastRelevantIdx - testIdx + 1) {
      // skip test index if closed parens
      if (testIdx === ')') {
          testIdx++;
          continue;
      }
      // running length of current test
      let currLength = 0;
      // number of unclosed open parenthesis
      let unclosed = 0;
      // minimum number of unclosed open parens after encountering first closed parens
      let minUnclosed;
      for (let i = testIdx; i <= lastRelevantIdx; i++) {
          if (s[i] === '(') {
              unclosed++;
              currLength++;
          } else {
              if (unclosed !== 0) {
                  unclosed--;
                  currLength++;
                  // if closed but still valid
                  if (unclosed === 0) {
                      if (longestValid < currLength) {
                          longestValid = currLength;
                      }
                      testIdx = i + 1;
                  }
                  if (unclosed < minUnclosed || minUnclosed === undefined) {
                      minUnclosed = unclosed;
                  }
              } else {
                  // if invalidated
                  if (longestValid < currLength) {
                      longestValid = currLength;
                  }
                  testIdx = i + 1;
                  break;
              }
          }
      }
      // if never closed set testIdx to next possibility
      if (minUnclosed !== undefined) testIdx += minUnclosed;
      // if first char was closed parens, minUnclosed = undefined and currLength = 0
      else if (currLength) testIdx++;
  }
  return longestValid;
};