// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/
// Difficulty: Easy
// Date Completed: 11/25/2023

// Description of Problem:
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Solution Time Complexity: 0(n)
// Solution Space Complexity: 0(1)

// Solution:
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length > t.length) return false;
  if (!s.length) return true;
  let sIdx = 0;
  for (const char of t) {
      if (char === s[sIdx]) sIdx++;
      if (sIdx === s.length) return true;
  }
  return false;
}; 