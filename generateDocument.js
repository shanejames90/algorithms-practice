// given string of characters,
// given a string representing a document you need to generate.
// fuction to determine if you can generate the documnet using the available characters.
// returns boolean
// create hash table of characters
// count frequency that characters occur
// take in doc, check each char of document against hash
// if frequency of chars match hash then return true

function generateDocument(characters, document) {
  const characterCounts = {}

  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0

    characterCounts[character]++
  }
  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0) return false

    characterCounts[character]--
  }
  return true
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
