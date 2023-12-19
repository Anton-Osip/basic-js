const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrayWithout = arr.filter(element => {
    if (element !== -1) {
      return element
    }
  })
  let sortArrayWithout = arrayWithout.sort((a, b) => a - b)

  let resultArr = []
  let count = 0
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === -1) {
      resultArr.push(-1)
    } else {
      resultArr.push(sortArrayWithout[count])
      count++
    }
  }
  return resultArr
}

module.exports = {
  sortByHeight,
}
