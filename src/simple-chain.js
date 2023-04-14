const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  resArr: [],

  getLength() {
    return this.resArr.length;
  },

  addLink(value) {
    this.resArr.push(value);
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || position > this.resArr.length || position <= 0) {
      this.resArr = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.resArr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.resArr.reverse();

    return this;
  },

  finishChain() {
    let result = '';
    this.resArr.forEach((i) => {
      result += `( ${i} )~~`;
    });

    this.resArr = [];
    return result.slice(0, -2);
  },
};

module.exports = {
  chainMaker
};
