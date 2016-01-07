/**
 * pad-number
 * @version 0.0.1
 * @author Jonathan Puckey
 * @license MIT
 */

'use strict';

/**
 * @description Converts a number to a string with
 * a given amount of leading characters.
 * @param {number} number Number to convert.
 * @param {number} width Amount of leading characters to prepend.
 * @param {string} [padding = '0'] leading character.
 * @throws Error
 * @returns {string}
 */
function pad(number, width, padding) {

  // Set padding character.
  padding = padding || '0';

  // Convert number to string.
  number = number + '';

  // Return either the original number as string,
  // or the number with leading padding characters.
  if (!width || number.length >= width) return number;
  else return new Array(width - number.length + 1).join(padding) + number;
}

module.exports = pad;
