// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// O(n) - time ; we have to traverse every node 
// O(d) [d = depth of tree] - space ; no additional space, but we are using space on the callstack, b/c we are calling the  
// recursive function on all of our subtrees
function validateBst(tree) {
    // Write your code here.
    // 1. check if node is between min value (bound) and max value (bound)
    // 2. call same cehck on left subtree and rightree and pass in different min value and max value
     // 3. when we call on left subtree we change max value to be current node 
     // 4. when we call function on a right subtree we update the minimum bound value 
     // 5. when we reach a leaf-- a none value we say this is a valid bst and climb up our tree 
     return validateBstHelper(tree, -Infinity, Infinity)
}

function validateBstHelper(tree, minValue, maxValue) {
    // first, check if we are at a leaf
    if (tree === null) return true
    // if we are at node we check that the value is between our lower and upper bounds 
    // if value is outside of bounds return false 
    if (tree.value < minValue || tree.value >= maxValue) return false
    // check leftsubtree 
    const leftIsValid = validateBstHelper(tree.left, minValue, tree.value)
    // return and check rightsubtree
    return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue)
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;