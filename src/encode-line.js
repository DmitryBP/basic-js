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
  let counter = [];
  [...str].forEach((el, i, arr) => {
    el !== arr[i + 1] ? counter.push(el, '.') : counter.push(el);
  });

  const charArr = counter.join('').split('.');
  charArr.pop();
  const res = charArr.map((item) => {
    return item.length > 1 ? item.length + item.slice(0, 1) : item;
  });
  return res.join('');
}

module.exports = {
  encodeLine
};
