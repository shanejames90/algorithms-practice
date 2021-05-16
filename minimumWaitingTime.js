// sample input queries = [3, 2, 1, 2, 6]
// (0) + (duration at q[i-1] (3)) + (3 + 2 (q[i-1]+q[i-2])) + (3 + 2 + 1)
// + (3 + 2 + 1 + 2) = (3 + 5 + 6 + 8) 
// 0 
// 3 
// 3 + (3 + 2)
// 3 + (3 + 2) + (3 + 2 + 1) + (3 + 2 + 1 + 2)

// [6, 2, 1, 2, 3] 6 + (8)

function minimumWaitingTime(queries) {
    // Write your code here.
    // SORT YOUR QUERIES, LARGEST QUERIES AT END 
    queries.sort((a, b) => a - b)
    // only storing one variable in memory that we update as we pass 
    // through the queries 
    let totalWaitingTime = 0 
    for (let idx = 0; idx < queries.length; idx++) {
        // keep track of duration which is the value at current index 
        const duration = queries[idx]
        // a constatnt that keeps track of how many elements we have left 
        // must add 1 to index to get length 
        const queriesLeft = queries.length - (idx + 1)
        // we're updating our accumulator by the time it takes current 
        // query to run multiplied by the number of queries left
        totalWaitingTime += duration * queriesLeft
    }
    // return our tracked variable
    return totalWaitingTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;

// [1, 2, 2, 3, 6] (5 - 2 )