// 66. Plus One
// https://leetcode.com/problems/plus-one
// Difficulty: Easy
// Date Completed: 11/22/2023

// Description of Problem:
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Solution Time Complexity: 0(n)

// Solution:
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (!digits.length) return [1];
  if (digits[digits.length - 1] === 9) {
      const digitsCarry = plusOne(digits.slice(0, -1));
      digitsCarry.push(0);
      return digitsCarry;
  }
  digits[digits.length - 1] += 1;
  return digits;
};