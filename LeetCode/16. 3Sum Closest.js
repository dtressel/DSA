// 16. 3Sum Closest
// https://leetcode.com/problems/3sum-closest/
// Difficulty: Medium
// Date Completed: 11/26/2023

// Description of Problem:
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// Solution Time Complexity: 0(n^2)
// Solution Space Complexity: O(1)

// Solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let left = 0; left < nums.length - 2; left++) {
      let middle = left + 1;
      let right = nums.length - 1;
      while (middle < right) {
          const sum = nums[left] + nums[middle] + nums[right];
          if (sum < target) middle++;
          else if (sum > target) right--;
          else return sum;
          const difference = Math.abs(target - sum);
          if (difference < Math.abs(target - closestSum)) {
              closestSum = sum;
          }
      }
  }
  return closestSum;
};