// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }

    // O(n^2) time | O(n^2) space 
    populateSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubstringStartingAt(i, string)
        }
    }

    insertSubstringStartingAt(i, string) {
        let node = this.root
        for (let j = i; j < string.length; j++) {
            const letter = string[j]
            // if node is not in trie, then add node with hash table 
            if (!(letter in node)) node[letter] = {}
            // set current node to the letter just added 
            node = node[letter]
        }
        node[this.endSymbol] = true
    }

    // O(m) time | O(1) space
    contains(string) {
        let node = this.root 
        for (const letter of string) {
            if (!(letter in node)) return false 
            node = node[letter]
        }
        return this.endSymbol in node 
    }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;