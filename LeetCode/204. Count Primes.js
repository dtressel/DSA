// 204. Count Primes
// https://leetcode.com/problems/count-primes/
// Difficulty: Medium
// Date Completed: 12/26/2023

// Description of Problem:
// Given an integer n, return the number of prime numbers that are strictly less than n.

// Time Complexity: 
// Space Complexity: 

// Solution (Best):
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const primes = new Array(n).fill(true);
  primes[0] = primes[1] = false;
  for (let i = 2; i * i < n; i++) {
      for (let j = i * i; j < primes.length ; j += i) {
          primes[j] = false;
      }
  }
  return primes.reduce((accum, curr) => {
      if (curr) return accum + 1;
      return accum;
  })
};

// Old Solution (Working but slow):
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 3) return 0;
  if (n === 3) return 1;
  if (n < 6) return 2;
  const primes = [2, 3, 5];
  // create array of potential primes
  for (let i = 7; i < n; i += 2) {
      if (i % 3 !== 0) primes.push(i);
  }
  for (let i = 2; i < primes.length; i++) {
      for (let j = i + 1; j < primes.length; j++) {
          if (primes[j] % primes[i] === 0) {
              primes.splice(j, 1);
          }
      }
  }
  return primes.length
};


// Old Solution (Working but slow):
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 3) return 0;
  if (n === 3) return 1;
  function findNextPrimeUpToN(n, primeArr = [3]) {
      let testNum = primeArr[primeArr.length - 1] + 2;
      while (testNum < n) {
          let primeFound = true;
          for (const prime of primeArr) {
              if (testNum % prime === 0) {
                  primeFound = false;
                  break;
              }
          }
          if (primeFound) {
              primeArr.push(testNum);
              return findNextPrimeUpToN(n, primeArr);
          } else {
              testNum += 2;
          }
      }
      return primeArr;
  }
  return findNextPrimeUpToN(n).length + 1;
};