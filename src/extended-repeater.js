const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1,
    separator = options.separator || '+',
    addition = String(options.addition) || '',
    additionRepeatTimes = options.additionRepeatTimes || 1,
    additionSeparator = options.additionSeparator || '|'

  let res = []
  for (let i = 0; i < repeatTimes; i++) {
    let add = []
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (addition !== 'undefined') {
        add.push(addition)
      }
    }
    res.push(`${str}${add.join(additionSeparator)}`)
  }
  return res.join(separator)
}

module.exports = {
  repeater,
}
