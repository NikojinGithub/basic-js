const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
function transform(arr) {
  const result = [];
  if(!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");

  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--double-next'){
      result.push(arr[i + 1]);
    } else if(arr[i] === '--double-prev'){
      result.push(arr[i - 1]);
    } else if(arr[i] === '--discard-next'){
      arr.splice(i + 1, 1);
    } else if(arr[i] === '--discard-prev'){
      console.log(result);
      arr.splice(arr[i - 1], 1)
      console.log(result);
      i--;
    } else if(typeof(arr[i]) === 'number') {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(transform(["--discard-next", 3, "--double-next", 2, 4, 5, '--discard-prev', 6, '--double-prev']));

module.exports = {
  transform
};
