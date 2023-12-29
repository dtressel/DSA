// 1207. Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/
// Difficulty: Easy
// Date Completed: 12/26/2023

// Description of Problem:
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Time Complexity: O(n)
// Space Complexity: O(n)

// Solution:
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const buckets = {}
  for (const num of arr) {
      if (buckets[num]) buckets[num]++;
      else buckets[num] = 1;
  }
  return Object.keys(buckets).length === new Set(Object.values(buckets)).size;
};