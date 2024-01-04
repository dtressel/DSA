/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxHeightLeft = height[left];
  let maxHeightRight = height[right];
  let water = 0;
  while (left <= right) {
      if (maxHeightLeft < maxHeightRight) {
          if (height[left] < maxHeightLeft) {
              water += maxHeightLeft - height[left];
          } else {
              maxHeightLeft = height[left];
          }
          left++;
      } else {
          if (height[right] < maxHeightRight) {
              water += maxHeightRight - height[right];
          } else {
              maxHeightRight = height[right];
          }
          right--;
      }
  }
  return water;
};