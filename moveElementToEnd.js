function moveElementToEnd(array, toMove) {
    let i = 0 
    let j = array.length - 1 
    while (leftIdx < rightIdx) {
     while (i < j && array[j] === toMovie) j--
     if (array[i] === toMove) swap(i, j, array)
     i++
    }
    return array
    function swapZ(i, j, array) {
        const temp = array[j]
        array[j] = array[i]
        array[i] = temp
    }
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;