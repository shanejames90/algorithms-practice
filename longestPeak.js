// input: array of integers
// output: length of longest peak in array
// peak: adjacent integers in the array that are STRICTLY increasing until they reach
// a tip(the highest value in the peak), at which point they become strictly
// decreasing. At least three integers are required to form a peak

// array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// output: 6 // 0, 10, 6, 5, -1, -3

function longestPeak(array) {
  // Write your code here.
  // iterate through the array
  // treat every element as a peak
  let currentPeak = i
  for (let i = 0; i < array.length - 1; i++) {
    if (array.length === 1) {
      return array[0]
    }
    if (array[0] >= array[1]) {
      return 0
    }
    if (array[i] > array[i - 1] && array[i] < array[i + 1]) {
      currentPeak = i
      leftIdx = array[i - 1]++
      rigthIdx = array[i + 1]++
      return (rightIdx - leftIdx)
    }
  }
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
