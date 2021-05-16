function sortedSquaredArray(array) {
  // Write your code here.
  // use two pointers
  // compare square at right pointer with element at left pointer
  // add larger to the results
  // move that elements poiinter closer to the opposite side
  // repeat until pointers are equal or one passes another
  const result = []
  // pointers
  let leftIdx = 0
  let rightIdx = array.length - 1
  // define where we add values to results
  let i = rightIdx
  while (leftIdx <= rightIdx) {
    const leftSqr = Math.pow(array[leftIdx], 2)
    const rightSqr = Math.pow(array[rightIdx], 2)
    // compare squaures
    if(leftSqr > rightSqr) {
      // add to result[i], subtract 1 from i
      // move pointer closer to opposite side
      result[i--] = leftSqr
      leftIdx++
    } else {
      result[i--] = rightSqr
      rightIdx--
    }
  }
  return result
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
