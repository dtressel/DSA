// 169. Majority Element
// https://leetcode.com/problems/majority-element
// Difficulty: Easy

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Solutions Time Complexity: 

// Solution 1:
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // using Boyer–Moore majority vote algorithm
  let count = 0;
  let candidate;
  for (const num of nums) {
      if (count === 0) candidate = num;
      count += num === candidate ? 1 : -1;
  }
  return candidate;
};

// Solution 2: Using a simple frequency object
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const frequencies = {};
  for (const num of nums) {
      frequencies[num] = frequencies[num] ? frequencies[num] + 1 : 1;
      if (frequencies[num] > nums.length / 2) return num;
  }
};