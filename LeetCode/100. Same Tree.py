# 100. Same Tree
# https://leetcode.com/problems/same-tree/
# Difficulty: Easy
# Date Completed: 12/11/2023

# Description of Problem:
# Given the roots of two binary trees p and q, write a function to check if they are the same or not.
# Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

# Solution Time Complexity: 0(n)

# Solution:
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p, q) -> bool:
        if not p:
            if not q:
                return True
            else:
                return False
        if not q:
            return False
        if p.val != q.val:
            return False
        if p.left:
            if not self.isSameTree(p.left, q.left):
                return False
        else:
            if q.left:
                return False
        if p.right:
            if not self.isSameTree(p.right, q.right):
                return False
        else:
            if q.right:
                return False
        return True     