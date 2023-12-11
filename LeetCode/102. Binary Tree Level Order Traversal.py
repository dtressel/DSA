# 102. Binary Tree Level Order Traversal
# https://leetcode.com/problems/binary-tree-level-order-traversal/
# Difficulty: Medium
# Date Completed: 12/11/2023

# Description of Problem:
# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

# Solution Time Complexity: 0(n)

# Solution:
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root):
        if not root:
            return []
        values = []
        to_visit_queue = [root]
        while len(to_visit_queue):
            values.append([])
            new_nodes = []
            for node in to_visit_queue:
                values[-1].append(node.val)
                if node.left:
                    new_nodes.append(node.left)
                if node.right:
                    new_nodes.append(node.right)
            to_visit_queue = new_nodes
        return values