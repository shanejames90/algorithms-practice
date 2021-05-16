// function takes in array of AT LEAST 3 INTEGERS
// without sorting the array
// returns the sorted array of 3 largest integers in input array


function findThreeLargestNumbers(array) {
  // Write your code here.
  const threelargest = [null, null, null]
  for (const num of array) {
    updateLargest(threelargest, num)
  }
  return threelargest
}

function updateLargest(threelargest, num) {
  if (threelargest[2] === null || num > threelargest[2]) {
    shiftAndUpdate(threelargest, num, 2)
  } else if (threelargest[1] === null || num > threelargest[1]) {
    shiftAndUpdate(threelargest, num, 1)
  } else if (threelargest[0] === null || num > threelargest[0]) {
    shiftAndUpdate(threelargest, num, 0)
  }
}

function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num
    } else {
      array[i] = array[i + 1]
    }
  }
}
// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
