// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string
// Difficulty: Easy
// Date Completed: 12/26/2023

// Description of Problem:
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Time Complexity: O(n)
// Space Complexity: O(n)

// Solution:
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const stringAsArray = s.split('');
  let left = 0
  let right = s.length - 1;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  while (left < right) {
      if (!vowels.has(stringAsArray[left])) {
          left++;
          continue;
      }
      if (!vowels.has(stringAsArray[right])) {
          right--;
          continue;
      }
      [stringAsArray[left], stringAsArray[right]] = [stringAsArray[right], stringAsArray[left]];
      left++;
      right--;
  }
  return stringAsArray.join('');
};