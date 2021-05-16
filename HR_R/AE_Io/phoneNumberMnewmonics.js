// create a mapping form digits to letters, 
// create hash table mapping all string digits to list of their chars 

// O((4^n) * n) time - there a 4 possible chars that can represent a digit, at a digit you 
// will have 4^n recursive calls per digit times the number of digits 
// O((4^n) * n) space - we have 4^n mnemonics that take n space 

function phoneNumberMnemonics(phoneNumber) {
    // initialize array filled with zeros 
    const currentMnemonic = new Array(phoneNumber.length).fill('0')
    const mnemonicsFound = []

    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound)
    return mnemonicsFound
}

function phoneNumberMnemonicsHelper(idx, phoneNumber, currentMnemonic, mnemonicsFound) {
    // base case 
    if (idx === phoneNumber.length) {
        // we would be outside of phone number 
        const mnemonic = currentMnemonic.join('')
        mnemonicsFound.push(mnemonic)
    } else {
        // inside our phon number, find digit that represents number 
        const digit = phoneNumber[idx]
        // find letter 
        const letters = DIGIT_LETTERS[digit]
        // loop through all of letters and set them 1 at a time in current mnemonic 
        for (const letter of letters) {
            currentMnemonic[idx] = letter
            phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currentMnemonic, mnemonicsFound)
        }
    }
}

const DIGIT_LETTERS = {
    0: ['0'],
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}
// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;