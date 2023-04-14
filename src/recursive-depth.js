const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, n = 1, res = []) {
    res.push(n);
    arr.forEach((i) => {
      if (Array.isArray(i)) {
        this.calculateDepth(i, ++n, res);
        n--;
      }
    });
    return Math.max(...res);
  }
}

module.exports = {
  DepthCalculator
};
