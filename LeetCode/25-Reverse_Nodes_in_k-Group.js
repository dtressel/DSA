// 25. Reverse Nodes in k-Group
// https://leetcode.com/problems/reverse-nodes-in-k-group
// Difficulty: Hard

// Description of Problem:
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes 
// is not a multiple of k then left-out nodes, in the end, should remain as it is.
// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Description of Solution:
// 

// Time Complexity of Solution: O(n)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  function reverseList(values) {
      const newHead = new ListNode(values[values.length - 1]);
      let currNode = newHead;
      for (let i = values.length - 2; i >= 0; i--) {
          currNode.next = new ListNode(values[i]);
          currNode = currNode.next;
      }
      return [newHead, currNode];
  }
  // Execution start:
  if (k === 1) return head;
  let currNode = head;
  let values = [];
  let oldHead;
  let newHead;
  let currTail;
  // loop through nodes of old linked list
  while (currNode) {
      // push values into an array
      values.push(currNode.val);
      // Keep track of the head of the current subset of old linked list
      if (!oldHead) oldHead = currNode;
      // if we have k values in array, reverse and turn into new linked list
      if (values.length === k) {
          // the head and tail of the new linked list segment are returned
          const [head, tail] = reverseList(values);
          if (!newHead) {
              newHead = head;
          } else {
              // append new segment to new linked list
              currTail.next = head;
          }
          currTail = tail;
          values = [];
          oldHead = null;
      }
      currNode = currNode.next;
  }
  // If there are still remaining values, join to the end of new linked list
  if (oldHead) currTail.next = oldHead;
  return newHead;
};