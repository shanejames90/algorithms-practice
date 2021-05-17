
myArray = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0


function threeNumberSum(array, targetSum) {
   // three loops
    array.sort((a, b) => a - b)
    const solution = []
   for (let i = 0; i < array.length - 3; i++) {
       firstNumber = array[i]
       for (let j = i + 1; j < array.length - 2; j++) {
           secondNumber = array[j]
           for (let k = j + 1; k < array.length - 1; k++) {
               thirdNumber = array[k]
               let currentSum = (array[i] + array[j] + array[k])
               if (currentSum === targetSum) {
                   solution.push([array[i], array[j], array[k]])
               }
           }
       }
   }
   return solution
}

console.log(threeNumberSum(myArray, 0))

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;