// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/
// Difficulty: Medium

// Description of Problem:
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem
// without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Description of Solution:

// Time Complexity: O(n)

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
var swapPairs = function(head) {
  let newHead;
  // change the head to second node
  if (head?.next) {
    newHead = head.next;
  } else return head;
  // change next values for first two nodes
  head.next = newHead.next;
  newHead.next = head;
  let currNode = head;
  // currNode is always odd index nodes
  while (currNode.next?.next) {
    const currNodeNext = currNode.next;
    const currNodeNextNextNext = currNode.next.next.next || null;
    // point curr node to 3rd node
    currNode.next = currNode.next.next;
    // point old 3rd node to old 2nd node
    currNode.next.next = currNodeNext;
    // point old 2nd node to 4th node
    currNode.next.next.next = currNodeNextNextNext;
    currNode = currNode.next.next;
  }
  return newHead;
};