const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resStr = "";
  options.separator === undefined ? options.separator = "+" : null;
  options.additionSeparator === undefined && options.additionRepeatTimes > 1 ? options.additionSeparator = "|" : null;
  options.additionRepeatTimes === 1 ? options.additionSeparator = "" : null;


  if (options.additionRepeatTimes) {
    resStr += `${options.addition}${options.additionSeparator || ""}`;
    if (options.additionRepeatTimes !== 1) {
      resStr = resStr.repeat(options.additionRepeatTimes - 1) + options.addition;
    }
    if (options.repeatTimes === 1) {
      return `${str}${resStr}`;
    }
  } else {
    resStr = `${options.addition || ""}`;
  }

  let strNot = `${str}${resStr}`;
  str = `${str}${resStr}${options.separator || ""}`;
  options.repeatTimes === 1 ? strNot : null;

  return str.repeat(options.repeatTimes - 1) + `${strNot}`;
}

module.exports = {
  repeater
};
