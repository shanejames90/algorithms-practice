// sample input 
// n = 6
// denoms = [1, 5]
// sample : 6 // [1,1,1,1,1,1]
//              // [[5], [1]]
// n = target amount of money 
// denoms = the coins you have at your disposal 
// ** unlimeted amount of coins at disposal 

// sample : 0 // []
// sample: 1 // [1]
// sample: 2 // [1, 1] // [2]
// sample: 3 // [1, 1, 1] // [2, 1]
// sample: 4 // [1, 1, 1, 1] // [2, 2] // [2, 1, 1]

// sample: 6 denom: [1] // [1,1,1,1,1,1]
// sample: 6  denom: [1, 2] // [2, 2, 1, 1] [2, 2, 2] [2, 1, 1, 1, 1], 

function numberOfWaysToMakeChange(n, denoms) {
    // storing a variable that we'll return, creating a new Array from constructor 
    // passing it n which is length of array according to target amount of money 
    // n + 1 because we are accounting for 0. and filling entire aray with 0 
    const ways = new Array(n + 1).fill(0)
    // assigning index 0 the value of 1 - only 1 way to make $0
    ways[0] = 1
    // outer loop is looping through coin denoms 
    for (let denom of denoms) {
        // inner loop is the amount value for every amount before our target n 
        // start loop at 1, upper bound is always n (amount < n + 1)
        for (let amount = 1; amount < n + 1; amount++) {
            // check if our current denom in outter loop is less than or equal to  our // /// current amount. we can only make change if denom is <= amount
            if (denom <= amount) {
                // ways[amount] = ways[amount] + ways[amount - denom]
                ways[amount] += ways[amount - denom]
            }
        }
    }
    return ways[n]
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;