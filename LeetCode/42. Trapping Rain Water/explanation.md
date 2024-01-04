# 42. Trapping Rain Water
Link: https://leetcode.com/problems/trapping-rain-water

Difficulty: Hard

# Problem Description:
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

- n == height.length
- 1 <= n <= 2 * 104
- 0 <= height[i] <= 105

# Solution Explanation:

## Intuition
In order to solve this we first have to realize that what determines how much water can be trapped above a particular height[i] is the lower of the two max heights to its left and to its right.

## Approach
To solve, we can use two pointers: left starting at the beginning and right starting at the end of the array. Max heights to the right of the right pointer and to the left of the left pointer are stored in separate variables and are initially set at the height of the first and last index.

For each iteration of the loop we can find the lower of the two max heights and advance the corresponding pointer towards the middle. For example, if "max height left" is lower than "max height right", we will advance the left pointer. We now have enough information to calculate how much water can be held at that pointer. We are unaware of any heights in between the pointers, but that's okay since the limiting factor is the lower of the two max heights, and we know that the max height to the outside of the pointer chosen is lower than any potential max height to its other side.

If the height at the pointer is lower than the corresponding max height, we calculate how many units of water can be held above it (max height - height[i]). If the height at the pointer is higher than the corresponding max height then it can't store water, and we can update the value of the corresponding max height.

## Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)