// O(n) time | O(min(n, a)) space 
function longestSubstringWithoutDuplication(string) {
    // initialize hashtable
    const lastSeen = {}
    // initialize longest variable to 1; do [0, 1] not inclusive of 1 
    let longest = [0, 1]
    let startIdx = 0
    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        // check if char[i] is in hash table 
        if (char in lastSeen) {
            // if it is then update startIdx
            startIdx = Math.max(startIdx, lastSeen[char] + 1)
        }
        // check is current string is longer than initial longest 
        if (longest[1] - longest[0] < i + 1 - startIdx) {
            // update longest, i + 1 becuase +1 non inclusive 
            longest = [startIdx, i + 1]
        }
        // overwrite lastseen char 
        lastSeen[char] = i
    }
    // . slice() will return the longest substring non-inclusive of ending index of // ////// longest 
    return string.slice(longest[0], longest[1])
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;