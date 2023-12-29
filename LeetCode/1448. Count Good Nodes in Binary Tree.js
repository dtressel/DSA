// 1448. Count Good Nodes in Binary Tree
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// Difficulty: Medium
// Date Completed: 12/28/2023

// Description of Problem:
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.

// Time Complexity: O(n)
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
 * @return {number}
 */
var goodNodes = function(root, greatest = -Infinity) {
  if (!root) return 0;
  let goodNodesCount = 0;
  if (root.val > greatest) greatest = root.val;
  goodNodesCount += goodNodes(root.left, greatest);
  goodNodesCount += goodNodes(root.right, greatest);
  if (root.val === greatest) {
      goodNodesCount++;
  }
  return goodNodesCount;
};