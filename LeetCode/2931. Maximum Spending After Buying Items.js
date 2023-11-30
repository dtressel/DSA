// 2931. Maximum Spending After Buying Items
// https://leetcode.com/problems/maximum-spending-after-buying-items/
// Difficulty: hard
// Date Completed: 11/29/2023

// Description of Problem:
// You are given a 0-indexed m * n integer matrix values, representing the values of m * n different items in m different shops. Each shop has n items where the jth item in the ith shop has a value of values[i][j]. Additionally, the items in the ith shop are sorted in non-increasing order of value. That is, values[i][j] >= values[i][j + 1] for all 0 <= j < n - 1.
// On each day, you would like to buy a single item from one of the shops. Specifically, On the dth day you can:
// • Pick any shop i.
// • Buy the rightmost available item j for the price of values[i][j] * d. That is, find the greatest index j such that item j was never bought before, and buy it for the price of values[i][j] * d.
// Note that all items are pairwise different. For example, if you have bought item 0 from shop 1, you can still buy item 0 from any other shop.
// Return the maximum amount of money that can be spent on buying all m * n products.

// Solution Time Complexity:
// Solution Space Complexity:

// Solution:
/**
 * @param {number[][]} values
 * @return {number}
 */
var maxSpending = function(values) {
  const flatValues = values.reduce((accum, curr) => {
      accum.push(...curr);
      return accum;
  }, []);
  const sortedValues = flatValues.sort((a,b) => b - a);
  let maxMoney = 0;
  for (let i = sortedValues.length - 1; i >= 0; i--) {
      maxMoney += sortedValues[i] * (sortedValues.length - i);
  }
  return maxMoney;
};