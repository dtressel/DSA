# 643. Maximum Average Subarray I
# https://leetcode.com/problems/maximum-average-subarray-i/
# Difficulty: Easy
# Date Completed: 12/15/2023

# Description of Problem:
# You are given an integer array nums consisting of n elements, and an integer k.
# Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

# Solution Time Complexity: 0(n)

# Solution:
from functools import reduce

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        curr_sum = reduce(lambda x, y: x + y, nums[:k])
        max_sum = curr_sum
        left = 1
        right = k
        while right < len(nums):
            curr_sum = curr_sum - nums[left - 1] + nums[right]
            if curr_sum > max_sum:
                max_sum = curr_sum
            left += 1
            right += 1
        return max_sum / k