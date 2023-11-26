// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/
// Difficulty: Easy
// Date Completed: 11/23/2023

// Description of Problem:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Solution Time Complexity: 0(n)
// Solution Space Complexity: O(1)

// Solution:
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  for (var i = s.length - 1; s[i] === ' '; i--);
  for (var j = i; s[j] !== ' ' && j >= 0; j--);
  return i - j;
};