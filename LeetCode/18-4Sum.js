// 18. 4Sum
// https://leetcode.com/problems/4sum/
// Difficulty: Medium

// Description of Problem:
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//  - 0 <= a, b, c, d < n
//  - a, b, c, and d are distinct.
//  - nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Time Complexity: O(n^3)
// Space Compleity: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const solutions = [];
  nums.sort((a, b) => a - b);
  // set left pointer and use outer loop to move right
  let left = 0;
  while (left < nums.length - 3) {
      // set midLeft pointer and use inner loop to move right
      let midLeft = left + 1;
      while (midLeft < nums.length - 2) {
          if (midLeft !== left + 1 && nums[midLeft] === nums[midLeft - 1]) continue;
          // Set midRight and right pointers
          let midRight = midLeft + 1;
          let right = nums.length - 1;
          // Use two pointers technique for midRight and right pointers
          while (midRight < right) {
              const sum = nums[left] + nums[midLeft] + nums[midRight] + nums[right];
              if (sum < target) {
                  midRight++;
                  while (nums[midRight] === nums[midRight - 1]) midRight++;
              } else if (sum > target) {
                  right--;
                  while (nums[right] === nums[right + 1]) right--;
              } else {
                  solutions.push([nums[left], nums[midLeft], nums[midRight], nums[right]]);
                  midRight++;
                  while (nums[midRight] === nums[midRight - 1]) midRight++;
                  right--;
                  while (nums[right] === nums[right + 1]) right--;
              }
          }
          midLeft++;
          while (nums[midLeft] === nums[midLeft - 1]) midLeft++;
      }
      left++;
      while (nums[left] === nums[left - 1]) left++;
  }
  return solutions;
};