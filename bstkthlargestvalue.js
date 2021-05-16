// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(numberofNodesVisted, latestVisitedNodeValue) {
    this.numberofNodesVisted = numberofNodesVisted
    this.latestVisitedNodeValue = latestVisitedNodeValue
  }
}

function findKthLargestValueInBst(tree, k) {
  const treeInfo = new TreeInfo(0, -1)
  reverseInOrderTraverse(tree, k, treeInfo)
  return(treeInfo.latestVisitedNodeValue)
}
function reverseInOrderTraverse(node, k, treeInfo) {
  if (node === null || treeInfo.numberofNodesVisted >= k) return

  reverseInOrderTraverse(node.right, k, treeInfo)
  if (treeInfo.numberofNodesVisted < k) {
    treeInfo.numberOfNodesVisited++
    treeInfo.latestVisitedNodeValue = node.value
    reverseInOrderTraverse(node.left, k, treeInfo)
  }
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
