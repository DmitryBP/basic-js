const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
//   if (!date) return 'Unable to determine the time of year!';

//   // if (date.hasOwnProperty('getTime') === false) throw new Error('Invalid date!');
//   if (!(date instanceof Date)) {
//     throw new Error('Invalid date!');
//   }
//   date.getTime()
//   const month = date.getMonth();

//   const seasonMap = {

//     spring: [2, 3, 4],
//     summer: [5, 6, 7],
//     autumn: [8, 9, 10],
//     fall: [8, 9, 10],
//     winter: [11, 0, 1],
//   };

//   for (let key in seasonMap) {
//     if (seasonMap[key].includes(month)) return key;
//   }

throw new NotImplementedError('Not implemented');
}

module.exports = {
  getSeason,
};
