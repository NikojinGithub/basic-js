const { NotImplementedError } = require('../extensions/index.js');

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
// throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
function renameFiles(names) {
  const newArr = [];
  const result = [];

  names.forEach(item => {
    if(!newArr.includes(item)) {
      newArr.push(item)
    } else {
      const str = item + '(1)';
      newArr.push(str);
    }
  })

  newArr.forEach(item => {
    if(!result.includes(item)){
      result.push(item);
    } else {
      const arr = item.split('');
      arr.splice(arr.length - 3);
      const str = arr.join('') + '(2)'
      result.push(str);
    }
  })

  return result;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))

module.exports = {
  renameFiles
};
