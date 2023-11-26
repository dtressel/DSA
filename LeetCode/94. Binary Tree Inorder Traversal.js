// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/
// Difficulty: Easy
// Date Completed: 11/24/2023

// Description of Problem:
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Solution Time Complexity: 0(n)
// Solution Space Complexity: O(n)

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  function recurse(root) {
      if (root.left) {
          recurse(root.left);
      }
      inorderValues.push(root.val);
      if (root.right) {
          recurse(root.right);
      }
  }
  if (!root) return [];
  const inorderValues = [];
  recurse(root);
  return inorderValues;
};