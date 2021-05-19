myMatrix = [[1, 4, 7, 12, 15, 1000], [2, 5, 19, 31, 32, 1001], [3, 8, 24, 33, 35, 1002], [40, 41, 42, 44, 45, 1003], [99, 100, 103, 106, 128, 1004]]

myTarget = 44

function searchInSortedMatrix(matrix, target) {
    if (!matrix || matrix.length === 0) return null

    let colIdx = 0
    let rowIdx = matrix.length - 1
    // outer matrix loop 
    while (rowIdx > 0 && target < matrix[rowIdx][colIdx]) {
        rowIdx--
    }

    while (colIdx < matrix[0].length) {
        if (target === matrix[rowIdx][colIdx]) {
            return [rowIdx, colIdx]
        }
        if (target > matrix[rowIdx][colIdx]) {
            colIdx++
        } else if (rowIdx > 0) {
            rowIdx--
        } else {
            return [-1, -1]
        }
    }
    return [-1, -1]
}

console.log(searchInSortedMatrix(myMatrix, myTarget))
// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;