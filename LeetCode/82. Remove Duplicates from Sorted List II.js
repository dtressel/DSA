// 82. Remove Duplicates from Sorted List II
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
// Difficulty: Medium
// Date Completed: 12/6/2023

// Description of Problem:
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Solution Time Complexity: 0(n)

// Solution:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null;
  // left pointer is node before test node so can set new next if needed
  let left;
  // right pointer is test pointer
  let right = head;
  while (right?.next) {
      if (right.val === right.next.val) {
          // find last duplicate val
          while (right.val === right.next?.val) {
              right = right.next;
          }
          // move right to first node after last duplicate
          right = right.next;
          if (left) {
              left.next = right;
          } else head = right;
      } else {
        left = right;
        right = right.next;
      }
  }
  return head;
};