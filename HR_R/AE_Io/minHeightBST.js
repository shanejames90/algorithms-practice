
// find middle node or middle element in sorted array
// make that value the root node 
// all values to left will go in left subtree
// all values to the right will go in right subtree  


// RECURSIVE SOLUTION
// O(nlog(n)) time | O(n) space - where n is the length of the array
function minHeightBst(array) {
    return constructMinHeightBst(array, null, 0, array.length - 1)
}


function constructMinHeightBst(array, bst, startIdx, endIdx) {
    // when endIdx gets smaller than startIdx then we've run out of values, this is base case 
    // if endIdx is greater than startIdx we still have more values to add 
    // if endIdx is equal to startIdx then we have one more value to add 
    if (endIdx < startIdx) return
    const midIdx = Math.floor((startIdx + endIdx) / 2)
    const valueToAdd = array[midIdx]
    if (bst === null) {
        // if this is root value then value to add is our root using BST constructor 
        bst = new BST(valueToAdd)
    } else {
        bst.insert(valueToAdd)
    }
    constructMinHeightBst(array, bst, startIdx, midIdx - 1)
    constructMinHeightBst(array, bst, midIdx + 1, endIdx)
    return bst
}


// SOLUTION 2 
//  O(n) time | O(n) space - where n is the length of the array
function minHeightBst(array) {
    return constructMinHeightBst(array, null, 0, array.length - 1)
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
    if (endIdx < startIdx) return
    const midIdx = Math.floor((startIdx + endIdx) / 2)
    const newBstNode = new BST(array[midIdx])
    if (bst === null) {
        bst = newBstNode
    } else {
        // if value is smaller than current value which is root, then we start to the left 
        if (array[midIdx] < bst.value) {
            bst.left = newBstNode
            bst = bst.left
        } else {
            bst.right = newBstNode
            bst = bst.right
        }
    }
    constructMinHeightBst(array, bst, startIdx, midIdx - 1)
    constructMinHeightBst(array, bst, midIdx + 1, endIdx)
    return bst 
}


// SOLUTION 3
// O(n) time | O(n) space - where n is the length of the array 
function minHeightBst(array) {
    return constructMinHeightBst(array, 0, array.length - 1)
}

function constructMinHeightBst(array, startIdx, endIdx) {
    if (endIdx < startIdx) return null
    const midIdx = Math.floor((startIdx + endIdx) / 2)
    const bst = new BST(array[midIdx])
    bst.left = constructMinHeightBst(array, startIdx, midIdx - 1)
    bst.right = constructMinHeightBst(array, midIdx + 1, endIdx)
    return bst 
}




class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;