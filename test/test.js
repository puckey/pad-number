var assert = require('assert');
var pad = require('../index');

describe('pad', function(){
	it('passing 0 should work', function(){
		assert.equal('0000', pad(0, 4));
	});

	it('should return a padded version of the number as a string using leading zeroes', function(){
		assert.equal('0010', pad(10, 4));
	});

	it('return the number as a string if no second argument is provided', function(){
	  assert.equal('50', pad(50));
	});

	it('should return a string version of the number as is, when the number has more digits than the second argument', function(){
		assert.equal('10', pad(10, 1));
	});

	it('should pad the string using the string provided in the third argument', function(){
		assert.equal('---10', pad(10, 5, '-'));
	});
});