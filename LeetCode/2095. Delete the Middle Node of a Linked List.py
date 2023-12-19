# 2095. Delete the Middle Node of a Linked List
# https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
# Difficulty: Medium
# Date Completed: 12/13/2023

# Description of Problem:
# You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
# The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
# For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

# Solution Time Complexity: 0(n)

# Solution:
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head):
        list_length = 0
        curr_node = head
        # loop through nodes to find list length
        while (curr_node):
            list_length += 1
            curr_node = curr_node.next
        if list_length == 1:
            return None
        if list_length == 2:
            head.next = None
            return head
        idx_to_remove = math.floor(list_length / 2)
        curr_node = head
        # move curr_node pointer to node before the node to remove
        for i in range(idx_to_remove - 1):
            curr_node = curr_node.next
        # reset node's next value to eliminate middle node
        curr_node.next = curr_node.next.next
        return head
    
# Solution #2:
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head):
        # if only one node, return None
        if not head.next:
            return None
        # give fast a headstart so slow will land on one node before middle
        slow = head
        fast = head.next.next
        # loop until fast reaches end of linked list
        while (fast and fast.next):
            slow = slow.next
            fast = fast.next.next
        # delete middle node
        slow.next = slow.next.next
        return head