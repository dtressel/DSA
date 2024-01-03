class Solution {
  public int countGoodSubstrings(String s) {
      int count = 0, i = 0;
      while (i + 2 < s.length()) {
          if (s.charAt(i + 1) == s.charAt(i + 2)) {
              i += 2;
              continue;
          }
          if (s.charAt(i) != s.charAt(i + 1) && s.charAt(i) != s.charAt(i + 2)) {
              count++;
          }
          i++;
      }
      return count;
  }
}