// 872. Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/
// Difficulty: Easy
// Date Completed: 12/27/2023

// Description of Problem:
// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

// Time Complexity: O(n + m)
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  function findLeaves(node, leaves = []) {
      if (node.left) findLeaves(node.left, leaves);
      if (node.right) findLeaves(node.right, leaves);
      else if (!node.left) leaves.push(node.val);
      return leaves;
  }
  const leaves1 = findLeaves(root1);
  const leaves2 = findLeaves(root2);
  if (leaves1.length !== leaves2.length) return false;
  for (let i = 0; i < leaves1.length; i++) {
      if (leaves1[i] !== leaves2[i]) return false;
  }
  return true;
};