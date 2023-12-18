const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]npm run test
 */
function minesweeper(matrix) {
  let arr = []
  for (let i = 0; i < matrix.length; i++) {
    const subArr = []
    for (let j = 0; j < matrix[0].length; j++) {
      subArr.push(0)
    }
    arr.push(subArr)
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0
      if (i === 0 && j === 0) {
        if (matrix[i][j + 1]) count += 1
        if (matrix[i + 1][j + 1]) count += 1
        if (matrix[i + 1][j]) count += 1
      } else if (i === 0 && j === matrix[i].length - 1) {
        if (matrix[i][j - 1]) count += 1
        if (matrix[i + 1][j - 1]) count += 1
        if (matrix[i + 1][j]) count += 1
      } else if (i === matrix.length - 1 && j === 0) {
        if (matrix[i - 1][j]) count += 1
        if (matrix[i - 1][j + 1]) count += 1
        if (matrix[i][j + 1]) count += 1
      } else if (i === matrix.length - 1 && j === matrix[i].length - 1) {
        if (matrix[i - 1][j]) count += 1
        if (matrix[i][j - 1]) count += 1
        if (matrix[i - 1][j - 1]) count += 1
      } else if (i === 0) {
        if (matrix[i][j - 1]) count += 1
        if (matrix[i + 1][j - 1]) count += 1
        if (matrix[i + 1][j]) count += 1
        if (matrix[i + 1][j + 1]) count += 1
        if (matrix[i][j + 1]) count += 1
      } else if (j === 0) {
        if (matrix[i - 1][j]) count += 1
        if (matrix[i - 1][j + 1]) count += 1
        if (matrix[i][j + 1]) count += 1
        if (matrix[i + 1][j + 1]) count += 1
        if (matrix[i + 1][j]) count += 1
      } else if (j === matrix[i].length - 1) {
        if (matrix[i - 1][j]) count += 1
        if (matrix[i - 1][j - 1]) count += 1
        if (matrix[i][j - 1]) count += 1
        if (matrix[i + 1][j - 1]) count += 1
        if (matrix[i + 1][j]) count += 1
      } else if (i === matrix.length - 1) {
        if (matrix[i][j - 1]) count += 1
        if (matrix[i - 1][j - 1]) count += 1
        if (matrix[i - 1][j]) count += 1
        if (matrix[i][j + 1]) count += 1
        if (matrix[i - 1][j + 1]) count += 1
      } else {
        if (matrix[i - 1][j]) count += 1
        if (matrix[i - 1][j - 1]) count += 1
        if (matrix[i][j - 1]) count += 1
        if (matrix[i + 1][j - 1]) count += 1
        if (matrix[i + 1][j]) count += 1
        if (matrix[i + 1][j + 1]) count += 1
        if (matrix[i][j + 1]) count += 1
        if (matrix[i - 1][j + 1]) count += 1
      }
      arr[i][j] = count
    }
  }
  return arr
}

module.exports = {
  minesweeper,
}
