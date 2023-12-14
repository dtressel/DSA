# 283. Move Zeroes
# https://leetcode.com/problems/move-zeroes/
# Difficulty: Easy
# Date Completed: 12/13/2023

# Description of Problem:
# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
# Note that you must do this in-place without making a copy of the array.

# Solution Time Complexity: 0(n)

# Solution:
class Solution:
    def moveZeroes(self, nums) -> None:
        slow_idx = 0
        fast_idx = 0
        while fast_idx < len(nums):
            if nums[fast_idx] != 0:
                if slow_idx != fast_idx:
                    # move non-zero values forward
                    nums[slow_idx] = nums[fast_idx]
                slow_idx += 1
            fast_idx += 1
        # iterating in reverse set final values as zero
        while fast_idx > slow_idx:
            nums[fast_idx - 1] = 0
            fast_idx -= 1