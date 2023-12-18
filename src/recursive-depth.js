const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  constructor() {
    this.depth = 1
  }
  calculateDepth(arr) {
    let isArr = false

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        isArr = true
        break
      }
    }
    if (isArr) {
      this.depth += 1
      arrayFlat.call(this, arr.flat())
    }

    function arrayFlat(arr) {
      let isArr = false

      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          isArr = true
          break
        }
      }
      if (isArr) {
        this.depth += 1
        arrayFlat.call(this, arr.flat())
      }
    }

    return this.depth
  }
}

module.exports = {
  DepthCalculator,
}
