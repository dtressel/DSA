// 1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/
// Difficulty: Easy
// Date Completed: 12/27/2023

// Description of Problem:
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Time Complexity: O(n)
// Space Complexity: O(1)

// Solution:
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let currAltitude = 0;
  let maxAltitude = 0;
  for (const localGain of gain) {
      currAltitude += localGain;
      if (maxAltitude < currAltitude) {
          maxAltitude = currAltitude;
      }
  }
  return maxAltitude;
};