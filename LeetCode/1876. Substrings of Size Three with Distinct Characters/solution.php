<?
  class Solution {

    /**
    * @param String $s
    * @return Integer
    */
    function countGoodSubstrings($s) {
        $count = $i = 0;
        while ($i + 2 < strlen($s)) {
            if ($s[$i + 1] === $s[$i + 2]) {
                $i++;
                continue;
            }
            if ($s[$i] !== $s[$i + 1] && $s[$i] !== $s[$i + 2]) {
                $count++;
            }
            $i++;
        }
        return $count;
    }
  }
?>