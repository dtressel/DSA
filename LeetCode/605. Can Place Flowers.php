<?
  // 605. Can Place Flowers
  // https://leetcode.com/problems/can-place-flowers/
  // Difficulty: Easy
  // Date Completed: 12/21/2023

  // Description of Problem:
  // You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
  // Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

  // Time Complexity: O(n)
  // Space Complexity: O(1)

  // Solution:
  class Solution {
    /**
     * @param Integer[] $flowerbed
     * @param Integer $n
     * @return Boolean
     */
    function canPlaceFlowers($flowerbed, $n) {
      if ($n === 0) return true;
      if ($n > ceil(count($flowerbed) / 2)) return false; 
      $counter = 1;
      for ($i = 0; $i < count($flowerbed); $i++) {
          if ($flowerbed[$i] === 0) {
              $counter++;
          } else {
              $counter = 0;
          }
          if ($counter === 3) {
              $n--;
              $counter = 1;
              if ($n === 0) return true;
          }
      }
      if ($counter === 2) {
          if ($n === 1) return true;
      }
      return false;
    }
  }
?>