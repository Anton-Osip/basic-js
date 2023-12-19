const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
function repeatString(firstString, secondString) {
  let resultString = ''
  let firstStringLength = firstString.length
  let it = 0
  for (let i = 0; i < secondString.length; i++) {
    if (i % firstStringLength === 0) {
      it = 0
    }
    resultString += firstString[it]
    it++
  }
  return resultString
}

class VigenereCipheringMachine {
  constructor(mode) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
    this.square = []
    this.mode = mode
  }
  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i)
      row += this.alphabet.slice(0, i)
      this.square.push(row)
    }
  }
  getSquare() {
    return this.square
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let encryptMessage = ''

    let newKey = repeatString(key, message).toLocaleLowerCase()
    this.generateSquare()
    let counter = 0
    let newMessage = message.toLowerCase()
    for (let it = 0; it < newMessage.length; it++) {
      if (this.alphabet.indexOf(newMessage[it]) === -1) {
        encryptMessage += newMessage[it]
        counter++
        continue
      }
      let i = this.alphabet.indexOf(newMessage[it])
      let j = this.alphabet.indexOf(newKey[it - counter])
      encryptMessage += this.square[i][j]
    }
    if (this.mode === false) {
      return encryptMessage.toUpperCase().split('').reverse().join('')
    }
    return encryptMessage.toUpperCase()
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let decryptMessage = ''
    let newKey = repeatString(key, message).toLowerCase()
    let newMessage = message.toLowerCase()
    this.generateSquare()
    let count = 0
    for (let it = 0; it < newMessage.length; it++) {
      if (this.alphabet.indexOf(newMessage[it]) === -1) {
        decryptMessage += newMessage[it]
        count++
        continue
      }

      let i = this.alphabet.indexOf(newKey[it - count])
      let j = this.square[i].indexOf(newMessage[it])
      decryptMessage += this.alphabet[j]
    }
    if (this.mode === false) {
      return decryptMessage.toUpperCase().split('').reverse().join('')
    }
    return decryptMessage.toUpperCase()
  }
}

module.exports = {
  VigenereCipheringMachine,
}
