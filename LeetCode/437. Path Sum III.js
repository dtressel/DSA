// 437. Path Sum III
// https://leetcode.com/problems/path-sum-iii/
// Difficulty: Medium
// Date Completed: 12/28/2023

// Description of Problem:
// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

// Time Complexity: O(n^2)
// Space Complexity:

// Solution:
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum, currSum = 0, firstPass = true) {
  if (!root) return 0;
  let count = 0;
  currSum += root.val;
  if (currSum === targetSum) count++;
  count += pathSum(root.left, targetSum, currSum, firstPass);
  if (firstPass) count += pathSum(root.left, targetSum, 0, false);
  count += pathSum(root.right, targetSum, currSum, firstPass);
  if (firstPass) count += pathSum(root.right, targetSum, 0, false);
  return count;
};