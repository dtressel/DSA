// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/
// Difficulty: Easy
// Date Completed: 12/26/2023

// Description of Problem:
// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Time Complexity: O(n + m)
// Space Complexity: O(1)

// Solution:
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 === str2) return str1;
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  // find greatest common factor
  let dividend = longer.length;
  let gcf = shorter.length;
  while (dividend % gcf !== 0) {
      const newNum = dividend % gcf;
      dividend = Math.max(newNum, gcf);
      gcf = Math.min(newNum, gcf);
  }
  let greatestCommonDivisor = [];
  for (let i = 0; i < gcf; i++) {
      greatestCommonDivisor.push(shorter[i]);
  }
  for (let i = greatestCommonDivisor.length; i < shorter.length; i++) {
      if (shorter[i] !== greatestCommonDivisor[i % gcf]) return '';
  }
  for (let i = 0; i < longer.length; i++) {
      if (longer[i] !== greatestCommonDivisor[i % gcf]) return '';
  }
  return greatestCommonDivisor.join('');
};