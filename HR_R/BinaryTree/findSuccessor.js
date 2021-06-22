

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

// SOLUTION 1 
// O(n) time | O(n) space - where n is the number of nodes in the tree 
// function findSuccessor(tree, node) {
//     const inOrderTraversalOrder = getInOrderTraversalOrder(tree)
    
//     for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
//         const currentNode = inOrderTraversalOrder[idx]

//         if(currentNode !== node) continue

//         if(idx === inOrderTraversalOrder.length - 1) return null

//         return inOrderTraversalOrder[idx + 1]
//     }
// }

// function getInOrderTraversalOrder(node, order = []) {
//     if (node === null) return order

//     getInOrderTraversalOrder(node.left, order)
//     order.push(node)
//     getInOrderTraversalOrder(node.right, order)

//     return order
// }

// SOLUTION 2
// O(h) time | O(1) space - where h is the height of the tree
function findSuccessor(tree, node) {
    if (node.right != null) return getLeftmostChild(node.right)

    return getRightmostParent(node)
}

function getLeftmostChild(node) {
    let currentNode = node
    while (currentNode.left !== null) {
        currentNode = currentNode.left
    }

    return currentNode
}

function getRightmostParent(node) {
    let currentNode = node
    while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
        currentNode = currentNode.parent
    }

    return currentNode.parent 
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;