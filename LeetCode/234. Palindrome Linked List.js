// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
// Difficulty: Easy
// Date Completed: 11/30/2023

// Description of Problem:
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Solution Time Complexity: 0(n)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const arr = [];
  while (head) {
      arr.push(head.val);
      head = head.next;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
      if (arr[left] !== arr[right]) return false;
      left++;
      right--;
  }
  return true;
};