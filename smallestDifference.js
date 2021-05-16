// absolute difference closest to 0
// return array containing these two numbers 
function smallestDifference(arrayOne, arrayTwo) {
    // sort both arrays 
    arrayOne.sort((a, b) => a - b)
    arrayTwo.sort((a, b) => a - b)
    // loop through both with a pointer
    let idxOne = 0 
    let idxTwo = 0
    let smallest = Infinity 
    let current = Infinity
    let smallestPair = []
    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let firstNum = arrayOne[idxOne]
        let secondNum = arrayTwo[idxTwo]
        if (firstNum < secondNum) {
            current = secondNum - firstNum
            idxOne++
        } else if (secondNum < firstNum) {
            current = firstNum - secondNum
            idxTwo++
        } else {
            return [firstNum, secondNum]
        }
        if (smallest > current) {
            smallest = current
            smallestPair = [firstNum, secondNum]
        }
    }
    return smallestPair
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;