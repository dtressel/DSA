# 2390. Removing Stars From a String
# https://leetcode.com/problems/removing-stars-from-a-string/
# Difficulty: Medium
# Date Completed: 12/27/2023

# Description of Problem:
# You are given a string s, which contains stars *.
# In one operation, you can:
# • Choose a star in s.
# • Remove the closest non-star character to its left, as well as remove the star itself.
# Return the string after all stars have been removed.
# Note:
# • The input will be generated such that the operation is always possible.
# • It can be shown that the resulting string will always be unique.

# Time Complexity: O(n)
# Space Complexity: O(n)

# Solution:
class Solution:
    def removeStars(self, s: str) -> str:
        idxToKeep = []
        toRemoveCount = 0
        for i in range(len(s) - 1, -1, -1):
            if s[i] == '*':
                toRemoveCount += 1
            elif toRemoveCount:
                toRemoveCount -= 1
            else:
                idxToKeep.append(i)
        answerAsList = []
        for i in range(len(idxToKeep) - 1, -1, -1):
            answerAsList.append(s[idxToKeep[i]])
        return ''.join(answerAsList)