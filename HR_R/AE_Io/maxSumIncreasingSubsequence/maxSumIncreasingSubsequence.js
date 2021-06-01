
function maxSumIncreasingSubsequence(array) {
    const sequences = new Array(array.length)
    const sums = array.map(num => num)
    let maxSumIdx = 0
    for (let i = 0; i < array.length; i++) {
        // declare current num 
        const currentNum = array[i]
        // start at begining and compare j and i 
        for (let j = 0; j < i; j++) {
            const otherNum = array[j]
            if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
                sums[i] = sums[j] + currentNum
                sequences[i] = j
            }
        }
        if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i
    }
    return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)]
}

function buildSequence(array, sequences, currentIdx) {
    const sequence = []
    while (currentIdx !== undefined) {
        sequence.unshift(array[currentIdx])
        //update current index to index of previous number 
        currentIdx = sequences[currentIdx]
    }
    return sequence
}





// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;