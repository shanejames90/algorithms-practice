// SOLUTION 1 
// O(n) time | O(n) space 
function invertBinaryTree(tree) {
    const queue = [tree]
    while (queue.length) {
        const current = queue.shift()
        if (current === null) continue
        swapLeftAndRight(current)
        queue.push(current.left)
        queue.push(current.right)
    }
}

function swapLeftAndRight(tree) {
    const left = tree.left
    tree.left = tree.right
    tree.right = left
}

// SOLUTION 2
// O(n) time | O(d) space , d is depth of tree, representing the depth of longest branch representing recursive calls on stack 
function invertBinaryTree(tree) {
    if (tree === null) return 
    swapLeftAndRight(tree)
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)
}

function swapLeftAndRight(tree) {
    const left = tree.left 
    tree.left = tree.right
    tree.right = left 
}
// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;