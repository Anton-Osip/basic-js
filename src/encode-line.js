const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letterArray = str.split('')
  let res = ''
  for (let i = 0; i < letterArray.length; i++) {
    let count = 0
    if (letterArray[i] === letterArray[i - 1]) {
      continue
    }
    for (let j = i; j < letterArray.length; j++) {
      if (letterArray[i] === letterArray[j]) {
        count++
      } else {
        break
      }
    }
    if (count === 1) {
      res += `${letterArray[i]}`
    } else {
      res += `${count}${letterArray[i]}`
    }
  }

  return res
}

module.exports = {
  encodeLine,
}
