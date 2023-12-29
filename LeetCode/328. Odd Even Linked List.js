// 328. Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/
// Difficulty: Medium
// Date Completed: 12/27/2023

// Description of Problem:
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Time Complexity: O(n)
// Space Complexity: O(1)

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
var oddEvenList = function(head) {
  // if 0, 1, or 2 nodes, return current list
  if (!head?.next?.next) return head;
  const evenHead = head.next;
  let currEvenNode = evenHead;
  let currOddNode = head;
  while (currEvenNode.next) {
      currOddNode.next = currOddNode.next.next;
      currOddNode = currOddNode.next;
      currEvenNode.next = currOddNode.next;
      if (currEvenNode.next) {
          currEvenNode = currEvenNode.next;
      }
  }
  currOddNode.next = evenHead;
  return head;
};