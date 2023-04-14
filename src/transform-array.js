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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const finArr = [];

  let discardNext = false;

  for (let i = 0; i < arr.length; i++) {
    const onlyDiscard = arr[i - 2] && arr[i - 2] === '--discard-next';

    switch (arr[i]) {
      case '--discard-next':
        discardNext = true;
        break;

      case '--discard-prev':
        if (onlyDiscard) {
          continue;
        } else if (arr[i - 1]) {
          finArr.pop();
        }
        break;

      case '--double-next':
        if (arr[i + 1]) {
          finArr.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (onlyDiscard) {
          continue;
        } else if (arr[i - 1]) {
          finArr.push(arr[i - 1]);
        }
        break;

      default:
        if (discardNext) {
          discardNext = false;
        } else {
          finArr.push(arr[i]);
        }
        break;
    }
  }

  return finArr;
}

module.exports = {
  transform
};
