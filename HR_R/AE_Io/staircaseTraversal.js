// O(n) time \ O(n) space 
function staircaseTraversal(height, maxSteps) {
    let currentNumberOfWays = 0
    const waysToTop = [1]

        // sliding window approach
    for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
        const startOfWindow = currentHeight - maxSteps - 1
        const endOfWindow = currentHeight - 1
        // start of window must be positive 
        if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow]

        currentNumberOfWays += waysToTop[endOfWindow]
        waysToTop.push(currentNumberOfWays)
    }

    return waysToTop[height]
}

// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;