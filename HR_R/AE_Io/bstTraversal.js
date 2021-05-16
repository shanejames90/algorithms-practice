// O(n) time | O(n) space
function inOrderTraverse(tree, array) {
    // check if tree is a leaf node
    // we don't push to array until we hit the lowest value or null/none
    if (tree !== null) {
        // call recursive function on left 
        inOrderTraverse(tree.left, array)
        // push to the array the current tree's value
        array.push(tree.value)
        // call recursive function on right and pass in array
        inOrderTraverse(tree.right, array)
    }
    return array
}

// O(n) time | O(n) space
function preOrderTraverse(tree, array) {
    if (tree !== null) {
        // start by appending to the array the value 
        array.push(tree.value)
        preOrderTraverse(tree.left, array)
        preOrderTraverse(tree.right, array)
    }
    return array
}

// O(n) time | O(n) space
function postOrderTraverse(tree, array) {
    if (tree !== null) {
        postOrderTraverse(tree.left, array)
        postOrderTraverse(tree.right, array)
        array.push(tree.value)
    }
    return array
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;