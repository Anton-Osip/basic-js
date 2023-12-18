const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newObj = {}
  let newArr = []
  names.forEach(i => {
    if (newObj[i]) {
      newObj[i] = newObj[i] + 1
    } else {
      newObj[i] = 0
    }
  })
  for (let i = 0; i < names.length; i++) {
    if (newArr.length === 0) {
      newArr.push(names[i])
      continue
    }
    if (newArr.indexOf(names[i]) === -1) {
      newArr.push(names[i])
    } else {
      newArr.push(`${names[i]}(${newObj[names[i]] + 1})`)
      newObj[names[i]] = newObj[names[i]] + 1
    }
  }
  return newArr
}

module.exports = {
  renameFiles,
}
