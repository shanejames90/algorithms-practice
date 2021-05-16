function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    const potentialMatch = array[mid]
    if (target === potentialMatch) {
      return mid
    } else if (target < potentialMatch) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
