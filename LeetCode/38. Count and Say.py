# 38. Count and Say
# https://leetcode.com/problems/count-and-say/
# Difficulty: Medium
# Date Completed: 12/9/2023

# The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
# • countAndSay(1) = "1"
# • countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
# To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.
# For example, the saying and conversion for digit string "3322251":

# Solution:
class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return "1"
        count_say = [1]
        # loop for each step
        for i in range(n - 1):
            new_count_say = []
            # loop through current count_say string to build new string
            j = 0
            while j < len(count_say):
                num_count = 1
                # sub-loop to find repeated occurences of current character
                while len(count_say) > j + 1 and count_say[j] == count_say[j + 1]:
                    num_count += 1
                    j += 1
                new_count_say.extend([str(num_count), str(count_say[j + 1 - num_count])])
                j += 1
            count_say = new_count_say
        return "".join(count_say)