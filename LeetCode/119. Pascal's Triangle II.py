# 119. Pascal's Triangle II
# https://leetcode.com/problems/pascals-triangle-ii/
# Difficulty: Easy
# Date Completed: 12/7/2023

# Description of Problem:
# Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

# Solution Time Complexity: 0(n)

# Solution:
class Solution:
    def getRow(self, rowIndex: int):
        if rowIndex == 0:
            return [1]
        last_row = [1]
        for i in range(1, rowIndex + 1):
            # build current row from last row
            curr_row = [1]
            for j in range(1, i + 1):
                if j == i:
                    # append 1 if last index of row
                    curr_row.append(1)
                else:
                    # append sum of two numbers directly above
                    curr_row.append(last_row[j - 1] + last_row[j])
            last_row = curr_row
        return last_row