/**
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = function(s) {
  let count = 0;
  let i = 0;
  while (s[i + 2]) {
      if (s[i + 1] === s[i + 2]) {
          i += 2;
          continue;
      }
      if (s[i] !== s[i + 1] && s[i] !== s[i + 2]) {
          count++;
      }
      i++;
  }
  return count;
};