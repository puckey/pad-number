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
  // Convert number to string.
  var string = number.toString();

  // Return either the original number as string,
  // or the number with leading padding characters.
  if (!width || string.length >= width) {
    return string;
  }

  var leadingCharacters = new Array(width - string.length + 1).join(padding || '0');
  return leadingCharacters + string;
}

module.exports = pad;
