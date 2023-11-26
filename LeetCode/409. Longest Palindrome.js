// 409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/
// Difficulty: Easy
// Date Completed: 11/24/2023

// Description of Problem:
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Solution Time Complexity: 0(n)
// Solution Space Complexity: O(n)

// Solution:
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const buckets = {};
  for (const char of s) {
      buckets[char] = buckets[char] ? buckets[char] + 1 : 1;
  }
  let odds = 0;
  for (const key in buckets) {
      if (buckets[key] % 2) odds++;
  }
  return s.length - (odds || 1) + 1;
};