
// O(n) - time / O(n) - space 
function zigzagTraverse(array) {
    const height = array.length - 1
    const width = array[0].length - 1
    const result = []
    let row = 0
    let col = 0 
    let goingDown = true 

    while (!isOutOfBounds(row, col, height, width)) {
        result.push(array[row][col])
        if (goingDown) {
            // leftmost col or very bottom row then we have to turn
            if (col === 0 || row === height) {
                goingDown = false 
                // if in the final row go to the right
                if (row === height) {
                    col++
                } else {
                    // else keep doing down 
                    row++
                }
                // else we are going down by doing this 
            } else {
                row++
                col--
            }
        } else {
            // first row or last column , can only go down 
            if (row == 0 || col === width) {
                goingDown = true
                // if in final column must go right 
                if (col === width) {
                    row++
                } else {
                    col++
                }
                // not in top right perimeter keep going up 
            } else {
                row--
                col++
            }
        }
    }
    return result
}

function isOutOfBounds(row, col, height, width) {
    return row < 0 || row > height || col < 0 || col > width
}

// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse; 