const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const clearMembers = members.filter((el) => typeof el === 'string');
  const emptyArr = clearMembers.length === 0;
  if (emptyArr) return false;
  const teamLeters = [];

  for (const name of clearMembers) {
    teamLeters.push([...name.trim().toUpperCase()].shift());
  }
  return teamLeters.sort().join('');
}

module.exports = {
  createDreamTeam,
};
