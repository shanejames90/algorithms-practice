// take in non empty array of integers
// return: array of same length: array.length === rArray.length
// each element in rArray is equal to the product of every other number in the input array
// array = [1, 2, 3]
// rArray[0] = (array[1] * array[2])
// rArray[1] = (array[0] * array[2])
// rArray[2] = (array[0] * array[1])
// rArray = [(a[1] * a[2]), (a[0] * a[2]), (a[0] * a[1])]


function arrayOfProducts(array) {
  // Write your code here.
  // declare results array
  r = []
  return helper(array, currentIndex, r) {
    return r
  }
}

// maybe a helper function to do calculations
function helper(array, currentIndex, r) {
  for (let i > currentIndex; i < array.length; i++) {
    temp = array[i]
    temp2 = array[i + 1]
    r[currentIndex].push = (temp * temp2)
  }
  currentIndex++
  helper(array, currentIndex, r)
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
