function longestPalindromicSubstring(string) {
  if (!string || string.length <= 1) {
    return string
  }
  let count = string.substring(0, 1)
  for (let i = 0; i < string.length; i++) {
    let temp = permute(string, i, i)
    if (temp.length > count.length) {
      count = temp
    }
    temp = permute(string, i, i + 1)
    if (temp.length > count.length) {
      count = temp
    }
  }
  return count
}

const permute = (string, start, end) => {
  while (start >= 0 && end <= string.length - 1 && string[start] === string[end]) {
    start--
    end++
  }
  return string.substring(start + 1, end)
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
