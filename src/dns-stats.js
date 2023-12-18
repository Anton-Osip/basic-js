const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stat = {}
  domains.map(domain => {
    let subDom = domain.split('.')
    subDom = subDom.map(d => {
      return `.${d}`
    })
    let str = ''
    subDom.reverse().map(item => {
      str += item
      if (stat[str]) {
        stat[str] += 1
      } else {
        stat[str] = 1
      }
    })
  })
  return stat
}

module.exports = {
  getDNSStats,
}
