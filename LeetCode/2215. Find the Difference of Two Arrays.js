// 2215. Find the Difference of Two Arrays
// https://leetcode.com/problems/find-the-difference-of-two-arrays/
// Difficulty: Easy
// Date Completed: 12/26/2023

// Description of Problem:
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// • answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// • answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Time Complexity: O(n + m)
// Space Complexity: O(n + m)

// Solution:
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const answer = [[]];
  for (const num of set1) {
      if (!set2.has(num)) {
          answer[0].push(num);
      } else {
          set2.delete(num);
      }
  }
  answer[1] = [...set2];
  return answer;
};