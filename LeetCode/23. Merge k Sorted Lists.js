// ****** Try implementing priority queue for better solution **********
// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/
// Difficulty: hard
// Date Completed: 11/30/2023

// Description of Problem:
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Solution Time Complexity:
// Solution Space Complexity:

// Solution:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let newHead = null;
  let prevNode;
  while(true) {
      const [, listIdx] = lists.reduce((accum, curr, idx) => {
          if (curr?.val < accum[0]) {
              return [curr.val, idx];
          } else return accum;
      }, [Infinity, -1]);
      if (listIdx === -1) return newHead;
      if (!newHead) {
          newHead = lists[listIdx];
          prevNode = newHead;
      } else {
          prevNode.next = lists[listIdx];
          prevNode = prevNode.next;
      }
      lists[listIdx] = lists[listIdx].next;
  }
};