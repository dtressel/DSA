// 29. Divide Two Integers
// https://leetcode.com/problems/divide-two-integers/
// Difficulty: Medium

// Description of Problem:
// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
// Return the quotient after dividing dividend by divisor.
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

// Descriptions of Solutions:
// Solution 2:
// Solves the problem in the most basic way. Using a loop, I count how many times, I can subtract the divisor from the dividend.
// Solution 1:
// I cut the time of solution 2 drastically by testing multiples of 10 of the of the divisor using string manipulation.

// Solution 1 (most efficient):
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  function testMultiplesOf10 (dividendLocal, divisorLocal) {
      let quotientLocal = 1;
      let testSubtractor = +(divisorLocal + '0');
      while (testSubtractor < dividendLocal) {
          quotientLocal = +(quotientLocal + '0');
          testSubtractor = +(testSubtractor + '0');
      }
      dividendLocal = dividendLocal - +(testSubtractor.toString().slice(0, -1));
      return [quotientLocal, dividendLocal];
  }
  if (divisor === 1) return dividend;
  if (divisor === -1) {
      if (dividend === -2147483648) return 2147483647;
      return 0 - dividend;
  }
  let positive = true;
  if (dividend < 0) {
      positive = !positive;
      dividend = 0 - dividend;
  }
  if (divisor < 0) {
      positive = !positive;
      divisor = 0 - divisor;
  }
  let quotient = 0;
  while (dividend >= +(divisor + '0')) {
      const [quotientAdder, newDividend] = testMultiplesOf10 (dividend, divisor);
      quotient += quotientAdder;
      dividend = newDividend;
  }
  while (dividend >= divisor) {
      quotient++;
      dividend -= divisor;
  }
  if (positive) return quotient;
  return 0 - quotient;
};

// Solution 2:
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 1) return dividend;
  if (divisor === -1) {
      if (dividend === -2147483648) return 2147483647;
      return 0 - dividend;
  }
  let positive = true;
  if (dividend < 0) {
      positive = !positive;
      dividend = 0 - dividend;
  }
  if (divisor < 0) {
      positive = !positive;
      divisor = 0 - divisor;
  }
  let quotient = 0;
  while (dividend >= divisor) {
      quotient++;
      dividend -= divisor;
  }
  if (positive) return quotient;
  return 0 - quotient;
};