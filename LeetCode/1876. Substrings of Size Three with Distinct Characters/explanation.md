# 1876. Substrings of Size Three with Distinct Characters
Link: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters

Difficulty: Easy

# Problem Description:
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".
 

Constraints:

- 1 <= s.length <= 100
- s​​​​​​ consists of lowercase English letters.

# Solution Explanation:

## Intuition
We can use a fixed 3 character sliding window. We can use a single variable, i, to set the window with its boundaries being i and i + 2. Let's avoid using sets and just check to see if characters within the window are the same since we only have 3 characters to check.

## Approach
Loop through the string, breaking the loop whenever the right side of the window (i + 2) becomes out of bounds. Within the loop:
1. Check if the last two characters in the window are the same. If so, we can skip an iteration and advance i by 2 since the next iteration would also contain a duplicate.
2. Check if the first and second characters match and if the first and third characters match. If neither are true, we have a 3 distinct characters and can advance the count varaiable.

## Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)