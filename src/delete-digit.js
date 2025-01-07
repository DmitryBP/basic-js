const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let startArr = Array.from(n.toString());
  let currentArr = [...startArr];
  const comparedArr = [];

  startArr.forEach((_, i) => {
    currentArr.splice(i, 1);
    comparedArr.push(currentArr.reduce((acc, el) => acc + el, ''));
    currentArr = [...startArr];
  });
  return Math.max(...comparedArr);
}

module.exports = {
  deleteDigit
};
