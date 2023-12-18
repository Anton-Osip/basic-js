const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  debugger
  let arr = String(n).split('')
  arr = arr.map(item => {
    return Number(item)
  })
  let res = []
  for (let delNumber = 0; delNumber < arr.length; delNumber++) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      if (i !== delNumber) {
        str += String(arr[i])
      }
    }
    res.push(Number(str))
  }
  return Math.max.apply(null, res)
}

module.exports = {
  deleteDigit,
}
