const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s2Arr = [...s2];
  let res = [...s1].reduce((counter, elOuter) => {
    for (let i = 0; i < s2Arr.length; i++) {
      let elInner = s2Arr[i];
      if (elOuter === elInner) {
        counter++;
        s2Arr.splice(i, 1);
        break;
      }
    }
    return counter;
  }, 0);
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
