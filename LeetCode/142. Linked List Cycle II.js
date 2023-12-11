// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii
// Difficulty: Medium
// Date Completed: 12/6/2023

// Description of Problem:
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.

// Solution Time Complexity: 0(n)

// Solution:
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head) return null;
  let slowPointer = head
  let fastPointer = head;
  let fastIdx = 0;
  let slowIdx = 0;
  // loop with fast and slow pointer to see if they meet or if fastPointer reaches null
  do {
      fastPointer = fastPointer.next;
      if (fastIdx % 2) {
          slowPointer = slowPointer.next;
          slowIdx++;
      }
      fastIdx++;
  } while (fastPointer && fastPointer !== slowPointer);

  // if fastPointer reaches null then no loop
  if (!fastPointer) return null;

  // loop again through list to find length of loop
  let loopLength = 0;
  do {
      fastPointer = fastPointer.next;
      loopLength++;
  } while (fastPointer !== slowPointer);

  // find last known node in loop for efficiency
  let lastKnownLoopNode = slowPointer;
  let lastKnownLoopIdx = slowIdx;
  while(lastKnownLoopIdx < loopLength - 1) {
      lastKnownLoopIdx++;
      lastKnownLoopNode = lastKnownLoopNode.next;
  }

  // do binary search to find earliest loop node
  let left = 0;
  let right = slowIdx;
  let earliestLoopIdx = slowIdx;
  let earliestLoopNode = slowPointer;
  let testIdx = Math.floor((right + left) / 2);
  let testNode = head;
  while (left <= right) {
      // find testNode
      for (let i = 0; i < testIdx; i++) {
          testNode = testNode.next;
      }
      let movingTestNode = lastKnownLoopNode;
      let inLoop = true;
      // search to see if testNode is in loop
      for (let i = 0; movingTestNode !== testNode; i++) {
          if (i === loopLength) {
              inLoop = false;
              break;
          }
          movingTestNode = movingTestNode.next;
      }
      // move left or right pointer depending on if testIdx is in loop
      if (inLoop) {
          if (earliestLoopIdx > testIdx) {
              earliestLoopIdx = testIdx;
              earliestLoopNode = testNode;
          }
          right = testIdx - 1;
      } else left = testIdx + 1;
      // find new testIdx and testNode for next iteration of while loop
      testIdx = Math.floor((right + left) / 2);
      testNode = head;
  }
  
  return earliestLoopNode;
};