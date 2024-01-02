class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        count = i = 0
        while i + 2 < len(s):
            if (s[i + 1] == s[i + 2]):
                i += 2
                continue
            if (s[i] != s[i + 1] and s[i] != s[i + 2]):
                count += 1
            i += 1
        return count