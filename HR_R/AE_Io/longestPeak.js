function longestPeak (array) {
    let longestPeakLength = 0 
    let i = 1
    while (i < array.length - 1) {
        const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i]
        if (!isPeak) {
            i++
            continue
        }

        let leftIdx = i - 2
        while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            leftIdx--
        }
        let rightIdx = i + 2
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            rightIdx++
        }
        // this computation is -1 because when you break out of both while loops for 
        // leftidx and rightidx you will be at an index 1 less on left and 1 greater on 
        // right, so you have to subtract 1 to compute distance between indices 
        const currentPeakLength = rightIdx - leftIdx - 1
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength)
        i = rightIdx
    }
    return longestPeakLength
}