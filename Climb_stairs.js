/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // Recursive solution, takes too long:
  let numOfWays = 0;
  function searchRoutes (stairsLeft) {
      if (stairsLeft === 0)
          return numOfWays++;
      if (stairsLeft > 1)
          searchRoutes(stairsLeft - 2);
      searchRoutes(stairsLeft - 1)
  }
  searchRoutes(n);
  return numOfWays;


  // Efficient solution
  const last2Sums = [0, 0];
  for (let i = 1; i <= n; i++) {
      if (i <= 2)
          [last2Sums[0], last2Sums[1]] = [i, last2Sums[0]];
      else
          [last2Sums[0], last2Sums[1]] = [last2Sums[0] + last2Sums[1], last2Sums[0]];
  }
  return last2Sums[0];
};

var climbStairs = function(n) {
  if (n <= 1) {
      return 1;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

var climbStairs = function(n) {
  function calcWays(steps, memoized = { 1: 1, 2: 2 }) {
      if (memoized[steps]) return memoized[steps];
      const result = calcWays(steps - 1, memoized) + calcWays(steps - 2, memoized);
      memoized[steps] = result;
      return result;
  }
  return calcWays(n);
};