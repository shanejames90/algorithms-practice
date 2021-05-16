

function reverseWordsInString(string) {
  const words = []
  let startOfWord = 0
  for (let index = 0; index < string.length; index++) {
    const character = string[index]
    if (character === ' ') {
      words.push(string.slice(startOfWord, index))
      startOfWord = index
    } else if (string[startOfWord] === ' ') {
      words.push(' ')
      startOfWord = index
    }
  }

  words.push(string.slice(startOfWord))

  reverseList(words)
  return words.join('')
}

function reverseList(list) {
  let start = 0,
    end = list.length - 1
  while (start < end) {
    const temp = list[start]
    list[start] = list[end]
    list[end] = temp
    start++
    end--
  }
}



// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
