/* Question: Given a non-empty string of lowercase letters and anon-negative
integer representing a key, write a function that returns a new string obtained
by shifting every letter in the input string by k positions in the alphabet,
where k is the key. Not that letters should wrap around the alphabet; in other
words, the letter z shifted by one returns the letter a.

sample input:
string = 'xyz'
key = 2
*/

// SOLUTION 1:
// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
	// initialize new letter array
	const newLetters = []
	// mod by number of letters just in case key > 26
	const newKey = key % 26
	for (const letter of string) {
		newLetters.push(getNewLetter(letter, newKey))
	}
	return newLetters.join('')
}

// helper function
function getNewLetter(letter, key) {
	// turn each letter into a unicode value
	const newLetterCode = letter.charCodeAt() + key
	// turn unicode back into letter
	return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122))
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;

// SOLUTION 2:
// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const newLetters = []
	const newKey = key % 26
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	for (const letter of string) {
		newLetters.push(getNewLetter(letter, newKey, alphabet))
	}
	return newLetters.join('')
}

function getNewLetter(letter, key, alphabet) {
	const newLetterCode = alphabet.indexOf(letter) + key
	return alphabet[newLetterCode % 26]
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
