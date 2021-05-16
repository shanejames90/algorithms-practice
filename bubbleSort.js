function bubbleSort(array) {
  // Write your code here.
  // pass through the array once for every element in the array
  for (let i = 0; i < array.length; i++) {
    // for each pass through, move next largest number to final position
    for (let j = 0; j < array.length - 1; j++) {
      // compare current element with the next element
      // if current element is less than the next element
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array 
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
