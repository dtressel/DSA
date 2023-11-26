// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/
// Difficulty: Medium
// Date Completed: 11/24/2023

// Description of Problem:
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Solution Time Complexity: 0(n * m)
// Solution Space Complexity: O(n)

// Solution:
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagramsHash = {};
  for (const str of strs) {
      const sorted = [...str].sort().join('');
      if (anagramsHash[sorted]) {
          anagramsHash[sorted].push(str);
      } else {
          anagramsHash[sorted] = [str];
      }
  }
  let anagramsGrouped = [];
  for (const key in anagramsHash) {
      anagramsGrouped.push(anagramsHash[key]);
  }
  return anagramsGrouped;

  // Old Solution:

  // const anagramGroups = [];
  // const anagramsLtrFreq = [];
  // for (const str of strs) {
  //     const anagramsLtrFreqCopy = anagramsLtrFreq.map((freqObj) => {
  //         return { ...freqObj };
  //     });
  //     const currWordFreq = {};
  //     for (const char of str) {
  //         // remove char from freq objects and/or eliminate freq objects
  //         for (let i = 0; i < anagramsLtrFreqCopy.length; i++) {
  //             if (!anagramsLtrFreqCopy[i]) continue;
  //             if (!anagramsLtrFreqCopy[i][char]) {
  //                 anagramsLtrFreqCopy[i] = null;
  //                 continue;
  //             }
  //             anagramsLtrFreqCopy[i][char]--;
  //         }
  //         // add letters to current word frequency object
  //         if (currWordFreq[char]) {
  //             currWordFreq[char]++;
  //         } else {
  //             currWordFreq[char] = 1;
  //         }
  //     }
  //     // see if it matches any previous anagrams
  //     let match;
  //     for (let i = 0; i < anagramsLtrFreqCopy.length; i++) {
  //         if (!anagramsLtrFreqCopy[i]) continue;
  //         let matching = true;
  //         for (const key in anagramsLtrFreqCopy[i]) {
  //             if (anagramsLtrFreqCopy[i][key]) {
  //                 matching = false;
  //                 continue;
  //             }
  //         }
  //         if (matching) {
  //             match = i;
  //             break;
  //         }
  //     }
  //     if (match !== undefined) {
  //         anagramGroups[match].push(str);
  //     } else {
  //         anagramsLtrFreq.push(currWordFreq);
  //         anagramGroups.push([str]);
  //     }
  // }
  // return anagramGroups;
};