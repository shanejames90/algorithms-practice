function twoNumberSum(array, targetSum) {
  // check to see if numbers equal `targetSum`
  let newArray = []
  let leftIndex = 0
  let rightIndex = array.length - 1
  while (leftIndex < rightIndex ) {
    if (leftIndex[i] + rightIndex[i] = targetSum) return true
      // if true make new array
    newArray.push(leftIndex[i], rightIndex[i])
  }
  return false
  // if false return 0
}
exports.twoNumberSum = twoNumberSum



function runLengthEncoding(string) {
  const encodedStringCharacters = []
  let currentRunLength = 1

  for (let i = 1; i < string.length; i++) {
    const currentCharacter = string[i]
    const previousCharacter = string[i - 1]

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      encodedStringCharacters.push(currentRunLength.toString())
      encodedStringCharacters.push(previousCharacter)
      currentRunLenth = 0
    }
    currentRunLength++
  }
  encodedStringCharacters.push(currentRunLength.toString())
  encodedStringCharacters.push(string[string.length - 1])

  return encodedStringCharacters.join('')
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
