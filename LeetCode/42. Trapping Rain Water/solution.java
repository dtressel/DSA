class Solution {
  public int trap(int[] height) {
      int left = 0;
      int right = height.length - 1;
      int maxHeightLeft = height[left];
      int maxHeightRight = height[right];
      int water = 0;
      while (left < right) {
          if (maxHeightLeft < maxHeightRight) {
              left++;
              if (height[left] < maxHeightLeft) {
                  water += maxHeightLeft - height[left];
              } else {
                  maxHeightLeft = height[left];
              }
          } else {
              right--;
              if (height[right] < maxHeightRight) {
                  water += maxHeightRight - height[right];
              } else {
                  maxHeightRight = height[right];
              }
          }
      }
      return water;
  }
}