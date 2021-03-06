class Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }
    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value)
            return this.printList()
        }
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next
        leader.next = newNode
        newNode.next = follower
        newNode.prev = leader
        follower.prev = newNode
        this.length++
        return this.printList()
    }
    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        unwantedNode.next.prev = leader 
        leader.next = unwantedNode.next
        this.length--
        return this.printList()
    }


}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(31)
myLinkedList.insert(1, 100)
myLinkedList.remove(2)
console.log(myLinkedList.printList())