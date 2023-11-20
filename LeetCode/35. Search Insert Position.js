// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/
// Difficulty: Easy

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Solution Time Complexity: O(log n)
// Solution Space Complexity: 0(1)

// Solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      const midpoint = Math.floor((right + left) / 2);
      if (nums[midpoint] < target) left = midpoint + 1;
      else if (nums[midpoint] > target) right = midpoint - 1;
      else return midpoint;
  }
  return left;
};