// 42. Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/
// Difficulty: Hard
// Date Completed: 12/28/2023

// Description of Problem:
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Time Complexity: O(n) 
// Space Complexity:

// Solution:
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // find all peaks
  const peaks = [];
  let lastHeight = 0;
  let wasAscending = true;
  for (let i = 0; i < height.length; i++) {
      if (height[i] === lastHeight) continue;
      // if ascending
      if (height[i] > lastHeight) {
          wasAscending = true;
      } 
      // if descending
      else {
          if (wasAscending) {
              peaks.push({
                  index: i - 1,
                  height: height[i - 1],
              });
              wasAscending = false;
          }
      }
      lastHeight = height[i]
  }
  if (wasAscending) {
      peaks.push({
          index: height.length - 1,
          height: height[height.length - 1],
      });
  }

  // trim irrelevant peaks and separate individual troughs
  const relevantPeaks = [[peaks[0]]];
  for (let i = 1; i < peaks.length; i++) {
      const peak = peaks[i];
      // if current peak is greater than last peak
      if (peak.height >= relevantPeaks.at(-1).at(-1).height) {
          // if greater than or equal to first peak in group
          if (peak.height >= relevantPeaks.at(-1)[0].height) {
              // if there are more than one peak in the group, eliminate middle peaks
              if (relevantPeaks.at(-1).length > 1) {
                  relevantPeaks[relevantPeaks.length - 1] = [
                      relevantPeaks.at(-1)[0],
                      peak
                  ]
              } else {
                  relevantPeaks[relevantPeaks.length - 1].push(peak);
              }
              relevantPeaks.push([peak]);
          } else {
              while (peak.height > relevantPeaks.at(-1).at(-1).height) {
                  if (relevantPeaks.at(-1).length === 1) break;
                  relevantPeaks[relevantPeaks.length - 1].pop();
              }
              relevantPeaks[relevantPeaks.length - 1].push(peak);
          }
      } else {
          relevantPeaks[relevantPeaks.length - 1].push(peak);
      }
  }
  if (relevantPeaks.at(-1).length === 1) relevantPeaks.pop();
  if (relevantPeaks.length === 0) return 0;
  if (relevantPeaks.at(-1).length > 2) {
      const reversed = [...relevantPeaks.at(-1)];
      reversed.reverse();
      const relevantPeaks2 = [[reversed[0]]];
      for (let i = 1; i < reversed.length; i++) {
          const peak = reversed[i];
          // if current peak is greater than last peak
          if (peak.height >= relevantPeaks2.at(-1).at(-1).height) {
              // if greater than or equal to first peak in group
              if (peak.height >= relevantPeaks2.at(-1)[0].height) {
                  if (relevantPeaks2.at(-1).length > 1) {
                      relevantPeaks2[relevantPeaks2.length - 1] = [
                          relevantPeaks2.at(-1)[0],
                          peak
                      ]
                  } else {
                      relevantPeaks2[relevantPeaks2.length - 1].push(peak);
                  }
                  relevantPeaks2.push([peak]);
              } else {
                  while (peak.height > relevantPeaks2.at(-1).at(-1).height) {
                      if (relevantPeaks2.at(-1).length === 1) break;
                      relevantPeaks2[relevantPeaks2.length - 1].pop();
                  }
                  relevantPeaks2[relevantPeaks2.length - 1].push(peak);
              }
          } else {
              relevantPeaks2[relevantPeaks2.length - 1].push(peak);
          }
      }
      if (relevantPeaks2.at(-1).length === 1) relevantPeaks2.pop();
      for (const group of relevantPeaks2) {
          group.reverse();
      }
      relevantPeaks.pop();
      relevantPeaks.push(...relevantPeaks2);
  }

  // Calculate amount of water held in each trough
  let waterAmt = 0;
  for (const group of relevantPeaks) {
      const troughHeight = Math.min(group[0].height, group[1].height);
      for (let i = group[0].index + 1; i < group[1].index; i++) {
          if (troughHeight > height[i]) {
              waterAmt += troughHeight - height[i];
          }
      }
  }
  return waterAmt;
};