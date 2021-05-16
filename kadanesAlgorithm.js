function kadanesAlgorithm(array) {
    // Write your code here.
    // start by storing one variable maxSum 
    let maxEndingHere = array[0]
    let maxSoFar = array[0]
    for (let i = 1; i < array.length; i++) {
        const num = array[i]
        maxEndingHere = Math.max(num, maxEndingHere + num)
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }
    return maxSoFar
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;