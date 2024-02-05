/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  function findFirstInstance(left, right) {
      while (left <= right) {
          const midpoint = Math.floor((left + right) / 2);
          if (nums[midpoint] === target) {
              right = midpoint - 1;
          } else {
              left = midpoint + 1;
          }
      }
      return left;
  }

  function findLastInstance(left, right) {
      while (left <= right) {
          const midpoint = Math.floor((left + right) / 2);
          if (nums[midpoint] === target) {
              left = midpoint + 1;
          } else {
              right = midpoint - 1;
          }   
      }
      return right;
  }

  // first perform joint binary search to find one instance of target
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      const midpoint = Math.floor((left + right) / 2);
      if (nums[midpoint] < target) {
          left = midpoint + 1;
      } else if (nums[midpoint] > target) {
          right = midpoint - 1;
      } else {
          // if found target, branch off and do two binary searches
          return [
              findFirstInstance(left, midpoint),
              findLastInstance(midpoint, right)
          ];
      }
  }
  return [-1, -1];
};