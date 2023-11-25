// 134. Gas Station
// https://leetcode.com/problems/gas-station/
// Difficulty: Medium

// Description of Problem:
// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

// Time Complexity: O(n)
// Space Complexity: O(1)

// 1st Solution:
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let candidateStartIdx = 0;
  let currSum = 0;
  for (let i = 0; i < gas.length; i++) {
      const localNet = gas[i] - cost[i];
      if (currSum >= 0) {
          currSum += localNet;
      } else {
          currSum = localNet;
          candidateStartIdx = i;
      }
  }
  if (currSum < 0) return -1;
  for (let i = 0; i < candidateStartIdx; i++) {
      currSum += gas[i] - cost[i];
      if (currSum < 0) return -1;
  }
  return candidateStartIdx;
};

// 2nd Solution:
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let candidateStartIdx = 0;
  let currSum = 0;
  let totalSum = 0;
  for (let i = 0; i < gas.length; i++) {
      const localNet = gas[i] - cost[i];
      if (currSum >= 0) {
          currSum += localNet;
      } else {
          currSum = localNet;
          candidateStartIdx = i;
      }
      totalSum += localNet;
  }
  return totalSum >= 0 ? candidateStartIdx : -1;
};