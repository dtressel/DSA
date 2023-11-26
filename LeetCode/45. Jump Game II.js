// 45. Jump Game II
// https://leetcode.com/problems/plus-one
// Difficulty: Medium
// Date Completed: 11/23/2023

// Description of Problem:
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// • 0 <= j <= nums[i] and
// • i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Solution Time Complexity: 0(n^2)
// Solution Space Complexity: O(n)

// Solution:
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length === 1) return 0;
  // jumps list will be backwards
  const jumps = [1];
  // work from end of nums to beginning
  for (let i = nums.length - 3; i >= 0; i--) {
      jumps.push(1);
      // remove smaller jumps that can be skipped
      while (nums[i] >= jumps.at(-1) + jumps.at(-2)) {
          let adder = jumps.pop();
          adder += jumps.pop();
          jumps.push(adder);
      }
  }
  return jumps.length;
};