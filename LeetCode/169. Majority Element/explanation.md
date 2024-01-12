# 169. Majority Element
Link: https://leetcode.com/problems/majority-element/description/

Difficulty: Easy

# Problem Description:
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

- n == nums.length
- 1 <= n <= 5 * 104
- 109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?

# Solution Explanation:

## Intuition
While it's natural to want to use a frequency counter, there is an even easier solution with O(1) space complexity using the Boyer-Moore majority vote algorithm!

If you think about how we naturally count simple "yay" or "nay" votes, we don't keep track of the number of votes for each. We simply keep track of which one has more votes and by how many. We can approach this problem the same way since we know there is a majority!

## Approach
Using a candidate and count variables we keep track of which value is our majority candidate. For each iteration of the loop we do the following:

1. If count is 0, then the we set the current value as our candidate.
2. Next, we increment count if the current value matches the candidate or decrement count if not.

At the end the value of candidate will always be the majority element and count will always be greater than 0, and we can simply return candidate.

## Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)