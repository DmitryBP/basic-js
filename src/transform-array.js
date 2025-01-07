const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const newArr = [...arr];
  let isHavStr = true;

  while (isHavStr) {
    isHavStr = newArr.some((el) => typeof el === 'string');
    const strIndex = newArr.findIndex((el) => typeof el === 'string');
    if (strIndex > 0) {
      if (newArr[strIndex] === '--double-next') {
        newArr.splice(strIndex, 1, newArr[strIndex + 1]);
      }
      if (newArr[strIndex] === '--double-prev') {
        newArr.splice(strIndex, 1, newArr[strIndex - 1]);
      }
      if (newArr[strIndex] === '--discard-next') {
        newArr.splice(strIndex, 2);
        if (arr[strIndex + 2] === '--double-prev' || arr[strIndex + 2] === '--discard-prev') {
          newArr.splice(strIndex, 1);
        }
      }
      if (newArr[strIndex] === '--discard-prev') {
        newArr.splice(strIndex - 1, 2);
      }
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
