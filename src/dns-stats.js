const { NotImplementedError } = require('../extensions/index.js');

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
  const res = {};

  const reverseDomen = (domen) => {
    const parts = domen.split('.');
    const partsRev = [];
    parts.forEach((_, i) => {
      partsRev.push('.' + parts.slice(i, parts.length).reverse().join('.'));
    });
    return partsRev.reverse();
  };
  const allPart = [];
  domains.forEach((domen) => {
    reverseDomen(domen).forEach((part) => {
      allPart.push(part);
    });

    reverseDomen(domen).forEach((part) => {
      res[part] = allPart.reduce((acc, el) => (acc += el === part ? 1 : 0), 0);
    });
  });

  return res;
}

module.exports = {
  getDNSStats
};
