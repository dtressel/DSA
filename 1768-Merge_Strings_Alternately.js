// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately
// Difficulty: Easy

// Description of Problem:
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// Time Complexity: O(n)

// Solution:
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  const arr1 = [...word1];
  const arr2 = [...word2];
  const arrCombined = [];
  if (arr1.length < arr2.length) {
      let i = 0;
      while (i < arr1.length) {
          arrCombined.push(arr1[i]);
          arrCombined.push(arr2[i]);
          i++;
      }
      arrCombined.push(...arr2.slice(i));
  } else {
      let i = 0;
      while (i < arr2.length) {
          arrCombined.push(arr1[i]);
          arrCombined.push(arr2[i]);
          i++;
      }
      arrCombined.push(...arr1.slice(i));
  }
  return arrCombined.join('');
};