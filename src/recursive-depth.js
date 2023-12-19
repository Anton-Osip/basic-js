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
  maxDepth = 0
  calculateDepth(arr, depthLevel) {
    if (!depthLevel) {
      this.maxDepth = 0
      depthLevel = 1
    }

    if (arr.some(value => Array.isArray(value))) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.calculateDepth(arr[i], depthLevel + 1)
        }
      }
    } else {
      if (this.maxDepth < depthLevel) {
        this.maxDepth = depthLevel
      }
    }

    return this.maxDepth
  }
}

module.exports = {
  DepthCalculator,
}
