// 1. create a variable to store amt of change you can currently create up to 
// 2. sort all coins
// 3. loop through in ascending order 
// 4. at every iteration compare current coin to amt of change you can currently create up to 
function nonConstructibleChange(coins) {
   // sort coins in ascending order 
  coins.sort((a, b) => a - b)
   // store current amount that we make change up to
   let canMakeChange = 0
   for (const coin of coins) {
       if (coin > canMakeChange + 1) {
           return canMakeChange + 1
       } else {
          canMakeChange += coin
       }
   }
   return canMakeChange + 1
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;