# 118. Pascal's Triangle
# https://leetcode.com/problems/pascals-triangle/
# Difficulty: Easy
# Date Completed: 12/7/2023

# Description of Problem:
# Given an integer numRows, return the first numRows of Pascal's triangle.
# In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

# Solution Time Complexity: 0(n)

# Solution:
class Solution:
    def generate(self, numRows: int):
        triangle = [[1]]
        for i in range(1, numRows):
            triangle.append([1])
            for j in range(1, i + 1):
                if j == i:
                    triangle[i].append(1)
                else:
                    sum = triangle[i - 1][j - 1] + triangle[i - 1][j]
                    triangle[i].append(sum)
        return triangle