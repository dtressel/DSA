# 112. Path Sum
# https://leetcode.com/problems/path-sum/
# Difficulty: Easy
# Date Completed: 12/12/2023

# Description of Problem:
# Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
# A leaf is a node with no children.

# Solution Time Complexity: 0(n)

# Solution:
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root, targetSum: int) -> bool:
        if not root:
            return False
        if self.followPaths(root, targetSum, 0):
            return True
        return False
        
    def followPaths(self, node, targetSum, currSum):
        currSum += node.val
        if node.left:
            if self.followPaths(node.left, targetSum, currSum):
                return True
        if node.right:
            if self.followPaths(node.right, targetSum, currSum):
                return True
        elif currSum == targetSum and not node.left:
            return True
