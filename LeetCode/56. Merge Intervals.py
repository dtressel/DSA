# 56. Merge Intervals
# https://leetcode.com/problems/merge-intervals/
# Difficulty: Medium
# Date Completed: 12/10/2023

# Description of Problem:
# Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

# Solution Time Complexity: 0(nlogn)

# Solution:
class Solution:
    def merge(self, intervals):
        intervals.sort(key=lambda interval: interval[0])
        newIntervals = [intervals[0]]
        i = 1
        while i < len(intervals):
            if newIntervals[-1][-1] >= intervals[i][0]:
                if newIntervals[-1][-1] < intervals[i][1]:
                    newIntervals[-1][-1] = intervals[i][1]
            else:
                newIntervals.append([intervals[i][0], intervals[i][1]])
            i += 1
        return newIntervals