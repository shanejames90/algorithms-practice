myWords = ["this", "that", "did", "deed", "them!", "a"]

output = ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]


const minimumCharactersForWords = words => {
    // hash table to store max frequencies of each letter
    const maxFrequencies = new Map()
    // output array
    const output = []
    // iterate through words
    for (let word of words) {
        // hash table to store frequencies for each word
        const localMap = new Map()
        // iterate through chars in each word
        for (let char of word) {
            // tally each char
            if (localMap.has(char)) {
                localMap.set(char, localMap.get(char) + 1)
            } else {
                localMap.set(char, 1)
            }
        }
        // iterate through hash table
        for (let [key, value] of localMap) {
            // if key exists in maxFrequencies
            if (maxFrequencies.has(key)) {
                // if tally is greater than tally in maxFrequencies
                if (maxFrequencies.get(key) < value) {
                    // update tally in maxFreq to what tally is
                    maxFrequencies.set(key, value)
                }
                // else
            } else
                // add key/val pair to maxFrequencies
                maxFrequencies.set(key, value)
        }
    }
    // iterate through maxFrequencies
    for (let [key, value] of maxFrequencies) {
        // value tracker
        let freq = value
        // add key val times to output array
        while (freq > 0) {
            output.push(key)
            freq--
        }
    }
    return output
}

console.log(minimumCharactersForWords(myWords))
// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;