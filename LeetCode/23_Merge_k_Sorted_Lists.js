/** 
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 * Example:
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    return lists.reduce(merge, null);
};

function merge(listA, listB) {
    let leftList = listA;
    let rightList = listB;
    let root = new ListNode();
    let curr = root;
    while (leftList && rightList) {
        if (leftList.val <= rightList.val) {
            curr.next = new ListNode(leftList.val);
            curr = curr.next;
            leftList = leftList.next;
        } else {
            curr.next = new ListNode(rightList.val);
            curr = curr.next;
            rightList = rightList.next;
        }
    }
    if (leftList) {
        curr.next = leftList;
    }

    if (rightList) {
        curr.next = rightList;
    }

    return root.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const assert = require('assert');

var node1 = new ListNode(1);
var node2 = new ListNode(4);
var node3 = new ListNode(5);
node1.next = node2;
node2.next = node3;
var node4 = new ListNode(1);
var node5 = new ListNode(3);
var node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;
var node7 = new ListNode(2);
var node8 = new ListNode(6);
node7.next = node8;

function printVal(node) {
    const arr = [];

    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

assert.deepEqual(printVal(mergeKLists([node1, node4, node7])), [1, 1, 2, 3, 4, 4, 5, 6]);