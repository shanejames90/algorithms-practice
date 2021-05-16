// O(n^2) time | O(n) space 
function threeNumberSum(array, targetSum) {
    // sort the array 
    array.sort((a, b) => a - b)
    // return value 
    const triplets = []
    // outside for loop going to 3rd from last element so there's two other elements 
    // left to make sum 
    for (let i = 0; i < array.length - 2; i++) {
        // left pointer 
        let left = i + 1
        // right pointer
        let right = array.length - 1
        // while left and right don't overlap 
        while (left < right) {
            // current sum variable 
            const currentSum = array[i] + array[left] + array[right]
            // check if current sum is equal to target
            if (currentSum === targetSum) {
                // if so push to return array
                triplets.push([array[i], array[left], array[right]])
                // increase left pointer and decrease left pointer when a pair is found 
                left++
                right--
            } else if (currentSum < targetSum) {
                // if currentSum is less than target then increase left only 
                left++
            } else if (currentSum > targetSum) {
                // if current sum is greater than target then decrement right only 
                right--
            }
        }
    }
    //  return answer 
    return triplets
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;