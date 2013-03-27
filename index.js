function pad(number, width, padding) {
  padding = padding || '0';
  number = number + '';
  var length = number.length;
  return length >= width
  		? number
  		: new Array(width - length + 1).join(padding) + number;
}

module.exports = pad;