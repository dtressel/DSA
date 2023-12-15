# 1456. Maximum Number of Vowels in a Substring of Given Length
# https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
# Difficulty: Medium
# Date Completed: 12/15/2023

# Description of Problem:
# Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

# Solution Time Complexity: 0(n)

# Solution:
from functools import reduce

class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = {"a", "e", "i", "o", "u"}
        def vowel_counter(accum, curr):
            if curr in vowels:
                return accum + 1
            return accum
        curr_count = reduce(vowel_counter, s[:k], 0)
        max_count = curr_count
        # initial window
        left = 1
        right = k
        while right < len(s):
            curr_count = curr_count + vowel_counter(0, s[right]) - vowel_counter(0, s[left - 1])
            if curr_count > max_count:
                max_count = curr_count
            left += 1
            right += 1
        return max_count