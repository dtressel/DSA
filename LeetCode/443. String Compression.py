# 151. Reverse Words in a String
# https://leetcode.com/problems/reverse-words-in-a-string/
# Difficulty: Medium
# Date Completed: 12/14/2023

# Description of Problem:
# Given an input string s, reverse the order of the words.
# A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
# Return a string of the words in reverse order concatenated by a single space.
# Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

# Solution Time Complexity: 0(n)

# Solution:
class Solution:
    def compress(self, chars: List[str]) -> int:
        # 3 pointers:
        # left is slowest used to set new values at indices
        # middle is set at first instance of char group
        # right is moved to test subsequent indices to see if it matches middle
        left = 0
        middle = 0
        right = 1
        # build chars by replacing values at indices
        while right < len(chars):
            if chars[right] == chars[middle]:
                right += 1
            else:
                chars[left] = chars[middle]
                if right - middle > 1:
                    group_length_str = str(right - middle)
                    left += 1
                    for num in group_length_str:
                        chars[left] = num
                        left += 1
                else:
                    left += 1
                middle = right
                right += 1
        # after loop add final char sequence to chars and advance left
        chars[left] = chars[middle]
        if right - middle > 1:
            group_length_str = str(right - middle)
            left += 1
            for num in group_length_str:
                chars[left] = num
                left += 1
        else:
            left += 1
        # left will now be set at index after last set index, which is equal to relevant length
        return left