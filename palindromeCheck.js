/*Question: Write a function that takes in a non empty string and returns a
boolean representing whether the string is a palindrome. */

// SOLUTION 1
// O(n) time | O(n) space
function isPalindrome(string) {
  // Write your code here.
	const reversedChars = [];
	for (let i = string.length - 1; i >= 0; i--) {
		reversedChars.push(string[i])
	}
	return string === reversedChars.join('')
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

// SOLUTION 2
// O(n) TIME | O(n) space
function isPalindrome(string, i = 0) {
	const j = string.length - 1 - i
	return i >= j ? true: string[i] === string[j] && isPalindrome(string, i + 1)
}
// Do not edit the line below.
exports.isPalindrome = isPalindrome;


// SOLUTION 3 - BEST SOLUTION
// O(n) time | O(1) space
function isPalindrome(string) {
  // Write your code here.
	let leftIdx = 0
	let rightIdx = string.length - 1
	while (leftIdx < rightIdx) {
		if (string[leftIdx] !== string[rightIdx]) return false
		leftIdx++
		rightIdx--
	}
	return true
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
