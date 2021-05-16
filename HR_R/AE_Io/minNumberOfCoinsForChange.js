// O(nd) time | O(n) space
function minNumberOfCoinsForChange(n, denoms) {
    // instantiate with inifinity b/c it simplifies formula, 
    const numOfCoins = new Array(n + 1).fill(Infinity)
    // to make 0$ we need 0 coins
    numOfCoins[0] = 0
    for (const denom of denoms) {
        for (let amount = 0; amount < numOfCoins.length; amount++) {
            if (denom <= amount) {
                numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
            }
        }
    }
   return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;