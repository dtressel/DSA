# 128. Longest Consecutive Sequence
# https://leetcode.com/problems/longest-consecutive-sequence/
# Difficulty: Medium
# Date Completed: 12/10/2023

# Description of Problem:
# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
# You must write an algorithm that runs in O(n) time.

# Solution Time Complexity: 0(n)

# Solution:
class Solution:
    def canJump(self, nums) -> bool:
        if (len(nums) == 1):
            return True
        # loop through occurances of 0 and see if can get past
        while True:
            next_0_idx_to_cross = 0
            # find next index with value of 0
            while nums[next_0_idx_to_cross] != 0:
                next_0_idx_to_cross += 1
                # if 0 index doesn't exist or last idx is 0 return True
                if next_0_idx_to_cross == len(nums) - 1:
                    return True
            # see if there are several zeros in a row
            while next_0_idx_to_cross < len(nums) - 1 and nums[next_0_idx_to_cross + 1] == 0:
                next_0_idx_to_cross += 1
            # see if it can get past this zero and how far beyond it can jump
            test_idx = next_0_idx_to_cross - 1
            farthest_idx = 0
            while test_idx >= 0:
                local_farthest_idx = nums[test_idx] + test_idx
                if local_farthest_idx > farthest_idx:
                    farthest_idx = local_farthest_idx
                test_idx -= 1
            # if it can jump to or past the last index then we're done
            if farthest_idx >= len(nums) - 1:
                return True
            # if this is the case, then it could not get past this 0
            if farthest_idx <= next_0_idx_to_cross:
                return False
            #  ******* repeat this for further along 0s
            # find out if it can jump past any further along 0s
            test_index = next_0_idx_to_cross + 1
            while test_idx < farthest_idx:
                if nums[test_idx] == 0:
                    next_0_idx_to_cross = test_idx
                else:
                    local_farthest_idx = nums[test_idx] + test_idx
                    if local_farthest_idx > farthest_idx:
                        if local_farthest_idx >= len(nums) - 1:
                            return True
                        farthest_idx = local_farthest_idx
                test_idx += 1
            # slice nums so can test a new nums beyond the last 0
            nums = nums[next_0_idx_to_cross + 1:]