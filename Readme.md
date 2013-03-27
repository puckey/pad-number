
# pad-number

  Component: create a string representation of a number with leading zeroes.

## Installation

    $ component install puckey/pad-number

## API
   
	var pad = require('pad-number');

	console.log(pad(10, 4)); // '0010'

	console.log(pad(10, 5)); // '00010'

	console.log(pad(10, 1)); // '10'

	console.log(pad(10, 5, '-')); // '---10'

## License

  MIT
