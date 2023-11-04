// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Difficulty: Medium

// Description of Problem:
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Description of My Solution:
// 1. Loop through all nodes in Linked List to find last node and the node preceding the node to be deleted.
// 2. If the node to be deleted is the head, precedingNode will remain undefined.
//    In this case simply return the 2nd node.
// 3. Remove the correct node, simply by resetting the preceding node's next value.
// 4. Return head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let precedingNode;
    let currNode = head;
    for (let i = 0; currNode; i++) {
        if (i - n > 0) {
            precedingNode = precedingNode.next;
        } else if (i - n === 0) {
            precedingNode = head;
        }
        currNode = currNode.next;
    }
    if (!precedingNode) return head.next;
    precedingNode.next = precedingNode.next.next;
    return head;
};