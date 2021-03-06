
function subarraySort(array) {
    let minOutOfOrder = Infinity
    let maxOutOfOrder = -Infinity
    for (let i = 0; i < array.length; i++) {
        const num = array[i]
        if (isOutOfOrder(i, num, array)) {
            minOutOfOrder = Math.min(minOutOfOrder, num)
            maxOutOfOrder = Math.max(maxOutOfOrder, num)
        }
    }
    // edge case if array is already sorted, if this is the case 
    // then this variable will still be Inifinity  
    if (minOutOfOrder === Infinity) {
        return [-1, 1]
    }
    let subarrayLeftIdx = 0
    while (minOutOfOrder >= array[subarrayLeftIdx]) {
        subarrayLeftIdx++
    }
    let subarrayRightIdx = array.length - 1
    while (maxOutOfOrder <= array[subarrayRightIdx]) {
        subarrayRightIdx--
    }
    return [subarrayLeftIdx, subarrayRightIdx]
}

function isOutOfOrder(i, num, array) {
    if (i === 0) return num > array[i + 1]
    if (i === array.length - 1) return num < array[i - 1]
    return num > array[i + 1] || num < array[i - 1]
}

// Do not edit the line below.
exports.subarraySort = subarraySort;