// 735. Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/
// Difficulty: Medium
// Date Completed: 12/27/2023

// Description of Problem:
// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Time Complexity: O(n)
// Space Complexity: O(n)

// Solution:
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];
  let i = 0;
  while (i < asteroids.length) {
      // if last asteroid is moving right and this one is moving left
      if (stack.at(-1) > 0 && asteroids[i] < 0) {
          // if current asteroid is bigger
          if (stack.at(-1) < asteroids[i] * -1) {
              stack.pop();
              // don't advance i because we need to see if it'll break next asteroid on stack
              continue;
          } else if (stack.at(-1) === asteroids[i] * -1) {
              stack.pop();
          }
      } else {
          stack.push(asteroids[i]);
      }
      i++;
  }
  return stack;
};