// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/
// Difficulty: Easy
// Date Completed: 12/27/2023

// Description of Problem:
// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

// Time Complexity: O(n)
// Space Complexity: O(1)

// Solution:
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let leftSum = 0;
  let rightSum = nums.slice(1).reduce((accum, curr) => accum + curr, 0);
  for (let i = 0; i < nums.length; i++) {
      if (leftSum === rightSum) return i;
      leftSum += nums[i];
      rightSum -= nums[i + 1];
  }
  return -1;
};