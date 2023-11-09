// 15. 3Sum
// https://leetcode.com/problems/3sum/
// Difficulty: Medium

// Description of Problem:
// Given an integer array nums, return all the triplets [nums[i],nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Description of Solution #3:
// 1. Finally, is efficient enough to pass all tests without exceeding the time limit
// 2. Similar to #2, but with an optimization that naturally avoids duplicates
// 3. Basically, it uses a 3 pointer technique
// 4. Some optimization may still be possible

// Solution #3 Time Complexity: 0(n**2)

// Description of Solution #1:
// 1. While this seems to work it was not fast enough to pass all tests.
// 2. I created a frequency object for each number in initial array.
// 3. Then, I test each combination of two entries in the array to see if it adds up to a value in buckets
// 4. There are additional complications to avoid duplicates and adjust buckets for each number pair to test.

// Description of Solution #2:
// 1. This also works, but is too slow.
// 2. The problem stems from the laborous steps to avoid duplicates (same reason solution #1 fails)


// Solution #3:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const solutions = [];
  let leftValue;
  // Test each value in array, skipping duplicates
  for (let i = 0; i < nums.length - 2; i++) {
      if (leftValue === nums[i]) {
          continue;
      }
      leftValue = nums[i];
      // Create two pointers to try to find two more numbers that add up to test value
      let middle = i + 1;
      let right = nums.length - 1;
      let lastMiddleValue;
      let lastRightValue;
      while (middle < right) {
          // skip repeated values
          if (lastMiddleValue === nums[middle]) {
              middle++;
              continue;
          }
          if (lastRightValue === nums[right]) {
              right--;
              continue;
          }
          const sum = nums[middle] + nums[right] + leftValue;
          if (sum === 0) {
              const solution = [leftValue, nums[middle], nums[right]];
              solutions.push(solution);
              lastMiddleValue = nums[middle];
              lastRightValue = nums[right];
              middle++;
              right--;
          } else if (sum < 0) {
              lastMiddleValue = nums[middle];
              middle++;
          } else {
              lastRightValue = nums[right];
              right--;
          }
      }
  }
  return solutions;
};


// Solution # 1:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const solutions = [];
  const buckets = {};
  for (const num of nums) {
      if (buckets[num] === undefined) buckets[num] = 1;
      else buckets[num]++;
  }
  const numsNoDupes = Object.keys(buckets).map(str => +str);
  if (buckets[0] >= 3) solutions.push([0, 0, 0]);
  for (let i = 0; i < numsNoDupes.length - 1; i++) {
      if (i > 0) {
          delete buckets[numsNoDupes[i - 1]];
      }
      const bucketsCopy = { ...buckets };
      for (let j = i + 1; j < numsNoDupes.length; j++) {
          if (j > i + 1) delete bucketsCopy[numsNoDupes[j - 1]];
          bucketsCopy[numsNoDupes[i]]--;
          bucketsCopy[numsNoDupes[j]]--;
          const needed = -(numsNoDupes[i] + numsNoDupes[j]);
          if (bucketsCopy[needed]) {
              solutions.push([numsNoDupes[i], numsNoDupes[j], needed]);
          }
          bucketsCopy[numsNoDupes[i]]++;
          bucketsCopy[numsNoDupes[j]]++;
      }
  }
  return solutions;
};

// Solution #2:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const solutions = [];
  let testValue;
  const valuesToSkip = {};
  // Test each value in array, skipping duplicates
  for (let i = 0; i < nums.length; i++) {
      console.log(valuesToSkip);
      if (testValue === nums[i]) {
          continue;
      }
      testValue = nums[i];
      // Create two pointers to try to find two more numbers that add up to test value
      let left = 0;
      let right = nums.length - 1;
      while (left < right) {
          // skip top level test index
          if (left === i || valuesToSkip[nums[i]]?.includes(nums[left])) {
              left++;
              continue;
          }
          if (right === i || valuesToSkip[nums[i]]?.includes(nums[right])) {
              right--;
              continue;
          }
          const sum = nums[left] + nums[right] + testValue;
          if (sum === 0) {
              const solution = [testValue, nums[left], nums[right]];
              solutions.push(solution);
              left++;
              right--;
              for (let i = 0; i < solution.length; i++) {
                  if (valuesToSkip[solution[i]]) {
                      for (let j = 0; j < solution.length; j++) {
                          if (i !== j) {
                              valuesToSkip[solution[i]].push(solution[j]);
                          }
                      }
                  } else {
                      for (let j = 0; j < solution.length; j++) {
                          if (i !== j) {
                              valuesToSkip[solution[i]] = [solution[j]];
                          }
                      }
                  }
              }
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }
  }
  return solutions;
};