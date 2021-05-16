function groupAnagrams(words) {
  // Write your code here.
  // create a hash table to keep track of which strings are made up
  // of which letters
  const groups = {}

  for (let i = 0; i < words.length; i++) {
    // loop through words sort them alphabetically
    // sort words so that if they're made up of the same letters
    // they'll match the keys that are set
    let sort = words[i].split('').sort().join('')

    // if sorted word doesn't exist, add it as a key to the hash table
    if (!groups[sort]) {

      // set the key's value to an array containing the current
      // unsorted string. Wrap key's value in brackets.
      // Can't push additional strings in if the value isn't an array
      groups[sort] = [words[i]]
    } else {

      // if the sorted string already exists as a key on the hash table
      // this means the current unsorted string contains all those letters
      // push the current unsorted string into that key's exisiting array of
      // values
      groups[sort].push(words[i])
    }
  }

  // use Object.values on the groups has table to return all values
  // as an array
  return Object.values(groups)
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams
