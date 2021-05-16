function binarySearch(array, target) {
  // left and right index
  let leftIndex = 0
  let rightIndex = array.length - 1
  let mid

  while (leftIndex < rightIndex) {
    // calc mid
    mid = Math.floor((leftIndex + rightIndex) / 2)
    // check if mid is target
    if (array[mid] === target) {
      return mid
    }
    // check if mid is less than target, if so target is in
    // right half
    if (array[mid] < target) {
      leftIndex = mid + 1
    } else {
      // check target against lower half
      rightIndex = mid - 1
    }
  }
  // if target not found
  return -1
}





function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
    } else {
      break
    }
  }
  return closest
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
