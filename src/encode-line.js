const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  const arr = [];
  const result = [];

  for(let i = 1; i <= str.length; i++){
    if(str[i] === str.length || str[i] != str[i - 1]){
    arr.push([count, str[i - 1]]);
    count = 1;
    } else {
      count++;
    }
  }

  arr.forEach(i => {
    i.forEach(i => {
      if(i > 1 || typeof(i) === 'string'){
        result.push(i);
      };
    });
  });

  return result.join('');

}


module.exports = {
  encodeLine
};
