// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/
// Difficulty: Easy
// Date Completed: 11/30/2023

// Description of Problem:
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Solution Time Complexity: 0(n)

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
var preorderTraversal = function(root, visited = []) {
  if (root === null) return [];
  visited.push(root.val);
  preorderTraversal(root.left, visited);
  preorderTraversal(root.right, visited);
  return visited;
};