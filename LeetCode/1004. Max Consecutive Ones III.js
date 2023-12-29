// 1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/
// Difficulty: Medium
// Date Completed: 12/27/2023

// Description of Problem:
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Time Complexity: O(n)
// Space Complexity: O(1)

// Solution:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let left = 0;
  let right = 0;
  // set initial window (right will go one to far)
  while (k !== -1) {
      if (nums[right] === 0) k--;
      else if (nums[right] === undefined) return right - left;
      right++;
  }
  // move right back one and initial window is set
  right--;
  k == 0;
  // slide window
  // I'm very confused why this works
  // the right pointer is always one too far to the one
  // yet, I'm still checking right + 1???
  while (right < nums.length) {
      if (nums[left] === 0) k++;
      if (nums[right + 1] === 0) k--;
      else if (nums[right + 1] === undefined) break;
      right++;
      left++;
      if (k >= 0) {
          while (k !== -1) {
              if (nums[right] === 0) k--;
              else if (nums[right] === undefined) return right - left;
              right++;
          }
          right--;
          k == 0;
      }
  }
  return right - left;
};