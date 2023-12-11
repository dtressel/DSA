// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/
// Difficulty: Medium
// Date Completed: 12/1/2023

// Description of Problem:
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Solution Time Complexity: 0(n)

// Solution:
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const freqObj = { 0: 0, 1: 0, 2:0 };
  for (const num of nums) {
      freqObj[num]++;
  }
  let currIdx = 0;
  for (let i = 0; i < 3; i++) {
      while (freqObj[i]) {
          nums[currIdx] = i;
          freqObj[i]--;
          currIdx++;
      }
  }
};