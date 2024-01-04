class Solution:
    def trap(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        max_height_left = height[left]
        max_height_right = height[right]
        water = 0
        while left < right:
            if max_height_left < max_height_right:
                left += 1
                if height[left] < max_height_left:
                    water += max_height_left - height[left]
                else:
                    max_height_left = height[left]
            else:
                right -= 1
                if height[right] < max_height_right:
                    water += max_height_right - height[right]
                else:
                    max_height_right = height[right]
        return water