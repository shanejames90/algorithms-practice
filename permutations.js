function getPermutations(array) {
  // Write your code here.
  // store getPermutations
  let perms = []
  // base cases
  if (array.length === 0) return []
  if (array.length === 1) return [array]
  //init for loop
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    //use slice to create copy of input array
    const additional = array.slice(0, i).concat(array.slice(i + 1))
    const additionalPerms = getPermutations(additional)
    // for loop for additional numbers
    for (let j = 0; j < additional.length; j++) {
      const additionalPermsArray = [current].concat(additional[j])
      perms.push(additionalPermsArray)
    }
  }
  return perms
}

// Do not edit the line below.
exports.getPermutations = getPermutations;


// take in array give permutations of digits in array
