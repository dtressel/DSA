# 113. Path Sum II
# https://leetcode.com/problems/path-sum-ii/
# Difficulty: Medium
# Date Completed: 12/12/2023

# Description of Problem:
# Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
# A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

# Solution Time Complexity: 0(n)

# Solution:
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        if not root:
            return []
        paths = []
        def travel_paths(node, curr_sum, vals = []):
            curr_sum += node.val
            if node.left:
                vals_copy = vals.copy()
                vals_copy.append(node.val)
                travel_paths(node.left, curr_sum, vals_copy)
            if node.right:
                vals_copy = vals.copy()
                vals_copy.append(node.val)
                travel_paths(node.right, curr_sum, vals_copy)
            elif curr_sum == targetSum and not node.left:
                vals.append(node.val)
                paths.append(vals)
        travel_paths(root, 0)
        return paths