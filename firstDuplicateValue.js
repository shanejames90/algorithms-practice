function firstDuplicateValue(array) {
    let minimumSecondIndex = array.length
    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        for (let j = i + 1; j < array.length; j++) {
            const valueToCompare = array[j]
            if (value === valueToCompare) {
                minimumSecondIndex = Math.min(minimumSecondIndex, j)
            }
        }
    }
    if (minimumSecondIndex === array.length) return undefined

    return array[minimumSecondIndex]
}
console.log(firstDuplicateValue([2, 5, 1, 5, 3, 2, 1, 2, 4]))

function firstDuplicateValue(array) {
    for (const value of array) {
        const absValue = Math.abs(value)
        if (array[absValue - 1] < 0) return absValue
        // on first loop through take absolute value of element and subtract 1
        // go to 
        array[absValue - 1] *= -1
    }
    return -1
}


// console.log(firstDuplicateValue([2, 5, 1, 5, 3, 2, 1, 2, 4]))
// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;