// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// Difficulty: Easy

// Description of Problem:
// Given two strings needle and haystack, return the index of the first occurrence of
// needle in haystack, or -1 if needle is not part of haystack.

// Description of My Solution:
// 1. Loop through each letter of haystack
// 2. If letter matches first letter of needle, increment lettersMatched
// 3. Continue to increment lettersMatched if subsequent letters of haystack match subsequent letters of needles
// 4. If all letters match, return starting index of matched subset of haystack
// 5. If a letter doesn't match return to index after first matching letter and continue.

// Time Complexity: O(mn) for theoretical worst case scenario.


// Solution:
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let lettersMatched = 0;
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[lettersMatched]) {
          lettersMatched++;
          if (lettersMatched === needle.length) {
              return i - needle.length + 1;
          }
      } else {
          if (lettersMatched) {
              i = i - lettersMatched;
              lettersMatched = 0;
          }
      }
  }
  return -1;
};