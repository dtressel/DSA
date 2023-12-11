# 128. Longest Consecutive Sequence
# https://leetcode.com/problems/longest-consecutive-sequence/
# Difficulty: Medium
# Date Completed: 12/8/2023

# Description of Problem:
# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
# You must write an algorithm that runs in O(n) time.

# Solution Time Complexity: 0(n)

# Solution:
class Solution:
    def longestConsecutive(self, nums):
        num_set = set(nums)
        longest_sequence = 0
        while len(num_set) > longest_sequence:
            num = num_set.pop()
            local_sequence = 1
            test_num = num + 1
            while test_num in num_set:
                local_sequence += 1
                num_set.remove(test_num)
                test_num += 1
            test_num = num - 1
            while test_num in num_set:
                local_sequence += 1
                num_set.remove(test_num)
                test_num -= 1
            if local_sequence > longest_sequence:
                longest_sequence = local_sequence
        return longest_sequence