const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(arg = true) {
    this.arg = arg;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encArr = message.toUpperCase().split('');
    const length = message.split(' ').join('').length;
    key = key.padEnd(length, key).toUpperCase();

    let enc = '';

    for (let i = 0; i < encArr.length; i++) {
      if (encArr[i] === ' ') {
        enc += encArr[i];
        encArr.splice(i, 1);
      }

      if (encArr[i].charCodeAt() < 'A'.charCodeAt() || encArr[i].charCodeAt() > 'Z'.charCodeAt()
      ) {
        enc += encArr[i];
      } else {
        const code =
          ((encArr[i].charCodeAt() + key[i].charCodeAt()) % 26) + 65;

        enc += String.fromCharCode(code);
      }
    }

    return this.arg ? enc : enc.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const decArr = encryptedMessage.toUpperCase().split('');
    const length = encryptedMessage.split(' ').join('').length;
    key = key.padEnd(length, key).toUpperCase();

    let dec = '';

    for (let i = 0; i < decArr.length; i++) {
      if (decArr[i] === ' ') {
        dec += decArr[i];
        decArr.splice(i, 1);
      }

      if (decArr[i].charCodeAt() < 'A'.charCodeAt() || decArr[i].charCodeAt() > 'Z'.charCodeAt()) {
        dec += decArr[i];
      } else {
        const code =
          ((decArr[i].charCodeAt() + 26 - key[i].charCodeAt()) % 26) + 65;

        dec += String.fromCharCode(code);
      }
    }

    return this.arg ? dec : dec.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
