// 236. Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// Difficulty: Medium
// Date Completed: 12/28/2023

// Description of Problem:
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Time Complexity: O(n)
// Space Complexity:

// Solution:
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // Each iteration of this function will return one of 4 things:
  // 1. 'p' denoting that only 'p' was found at or below this node
  // 2. 'q' denoting that only 'q' was found at or below this node
  // 3. a TreeNode meaning that both 'p' and 'q' were found at or below this node
  // 4. undefined meaning that none of the above is true
  if(!root) return;
  let foundP = false;
  let foundQ = false;

  // check if p or q is in left branch
  let results = lowestCommonAncestor(root.left, p, q);
  if (results === "p") foundP = true;
  else if (results === "q") foundQ = true;
  // if common ancestor already found return node that was passed
  else if (results) return results;

  // check if p or q is in right branch
  results = lowestCommonAncestor(root.right, p, q);
  if (results === "p") foundP = true;
  else if (results === "q") foundQ = true;
  // if common ancestor already found return node that was passed
  else if (results) return results;

  // check if this node is p or q
  if (root === p) {
      foundP = true;
      if (!foundQ) return "p";
  }
  else if (root === q) {
      foundQ = true;
      if (!foundP) return "q";
  }

  // if p and q have been found and has gotten here then this is the LCA
  if (foundP && foundQ) return root;
  // else check if p or q has been found and return value accordingly
  else if (foundP) return "p";
  else if (foundQ) return "q";
};