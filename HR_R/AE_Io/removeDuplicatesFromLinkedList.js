// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time | O(1) space - where n is the number of nodes in the Linked List 
function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList 
    while (currentNode !== null) {
        let nextDistinctNode = currentNode.next
        while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
            nextDistinctNode = nextDistinctNode.next
        }

        currentNode.next = nextDistinctNode
        currentNode = nextDistinctNode
    }
    return linkedList
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;