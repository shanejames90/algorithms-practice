// determine if intervals are overlapping 

// sort the intervals with respect to their starting values. This will allow you to merge
// all overlapping intervals in a single traversal through the sorted intervals 

// after sorting intervals by starting values, traverse them
// at each iteration compart the start of the next interval to the end of the current 
//  interval to look for an overlap. if you find overlap mutate the current interval 
// so as to merge the next interval into it. 

function mergeOverlappingIntervals(array) {
    // declare variable and sort input values 
    const sortedIntervals = intervals.sort((a,b) => a[0] - b[0])

    // store merged intervals in solutions 2D array
    const mergedIntervals = []

    // make reference and loop through sorted intervals; must store current interval of sorted intervals as we loop so we can compare 
    let currentInterval = sortedIntervals[0]
    // append current interval to solution 2D array
    mergedIntervals.push(currentInterval)

    // check
    for (const nextInterval of sortedIntervals) {
        // declare end value of current interval of original sorted array as currentInterval
        const [_, currentIntervalEnd] = currentInterval
        // also declare next interval of original sorted array so that we can compare start number of // /// next interval to end number of currentInterval 
        const [nextIntervalStart, nextIntervalEnd] = nextInterval

        // check if currentInterval Ending value of original sorted array is greater than or equal to the 
        // next interval starting value...if it is then 
        if (currentIntervalEnd >= nextIntervalStart) {
            // set second value of current interval to the max between current ref original value and the next value's ending vlaue 
            currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
        } else {
            // otherwise if it's not greater or equal then set the next interval equal to the current 
            // interval 
            currentInterval = nextInterval
            // append current interval 
            mergedIntervals.push(currentInterval)
        }
    }
    return mergedIntervals
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;