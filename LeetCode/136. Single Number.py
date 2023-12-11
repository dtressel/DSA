# 136. Single Number
# https://leetcode.com/problems/single-number/
# Difficulty: Easy
# Date Completed: 12/8/2023

# Description of Problem:
# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
# You must implement a solution with a linear runtime complexity and use only constant extra space.

# Solution Time Complexity: 0(n)

# Solution:
class Solution:
    def singleNumber(self, nums):
        num_set = set()
        for num in nums:
            if num in num_set:
                num_set.remove(num)
            else:
                num_set.add(num)
        return num_set.pop()