const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730
// - функция принимает на вход строку, которая должна корректно преобразовываться в число,
// - функция должна проверять допустимость введенной радиоактивности - значения 0 и отрицательные, равно как и больше современного, лишены смысла,
// - если значение не преобразуется в число, или полученное число бессмысленно, функция просто возвращает false!
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity.trim() === '')
    return false
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false
  const k = 0.693 / HALF_LIFE_PERIOD
  let res = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k)
  return res
}

module.exports = {
  dateSample,
}
