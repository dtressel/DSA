/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  let left1 = 0, right1 = nums1.length - 1;
  let left2 = 0, right2 = nums2.length - 1;
  let elimCountHigh = 0, elimCountLow = 0;
  let medianLowerBound = -Infinity, medianUpperBound = Infinity;
  while (left1 <= right1 || left2 <= right2) {
      const mid1 = left1 <= right1 ? Math.floor((left1 + right1) / 2) : undefined;
      const mid2 = left2 <= right2 ? Math.floor((left2 + right2) / 2) : undefined;
      const testVal1 = nums1[mid1];
      const testVal2 = nums2[mid2];
      // if more high numbers have been eliminated or equal
      if (elimCountHigh >= elimCountLow) {
          if (testVal1 < testVal2 || mid2 === undefined) {
              // eliminating low nums from nums1
              medianLowerBound = Math.max(testVal1, medianLowerBound);
              elimCountLow += (mid1 + 1 - left1);
              left1 = mid1 + 1;
          } else {
              // eliminating low nums from nums2
              medianLowerBound = Math.max(testVal2, medianLowerBound);
              elimCountLow += (mid2 + 1 - left2);
              left2 = mid2 + 1;
          }
      } 
      // else if more low numbers have been eliminated
      else {
          if (testVal1 > testVal2 || mid2 === undefined) {
              // eliminating high nums from nums1
              medianUpperBound = Math.min(testVal1, medianUpperBound);
              elimCountHigh += (right1 + 1 - mid1);
              right1 = mid1 - 1;
          } else {
              // eliminating high nums from nums2
              medianUpperBound = Math.min(testVal2, medianUpperBound);
              elimCountHigh += (right2 + 1 - mid2);
              right2 = mid2 - 1;
          }
      }
  }
  // after eliminated all numbers
  if (elimCountHigh > elimCountLow) return medianUpperBound;
  if (elimCountHigh < elimCountLow) return medianLowerBound;
  return (medianUpperBound + medianLowerBound) / 2;
};