# 39. Combination Sum
# https://leetcode.com/problems/combination-sum/
# Difficulty: Medium
# Date Completed: 12/9/2023

# Description of Problem:
# Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
# The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
# The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

# Solution:
class Solution:
    def combinationSum(self, candidates, target: int):
        # recursive function to find solutions
        def test_combos(local_candidates, curr_combo = [], curr_sum = 0):
            # test all remaining numbers
            # only includes subsequent candidate numbers to avoid duplicates
            for i in range(len(local_candidates)):
                new_sum = curr_sum + local_candidates[i]
                if new_sum == target:
                    curr_combo_copy = curr_combo.copy()
                    curr_combo_copy.append(local_candidates[i])
                    solutions.append(curr_combo_copy)
                elif new_sum < target:
                    curr_combo_copy = curr_combo.copy()
                    curr_combo_copy.append(local_candidates[i])
                    test_combos(local_candidates[i:], curr_combo_copy, new_sum)
        solutions = []
        test_combos(candidates)
        return solutions