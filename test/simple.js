var assert = require('assert');
var argnames = require('../index.js');

describe('argname.values', function(done) {

  it('should return hash with argument names and values', function() {
    var func = function test(arg1, arg2, arg3) {
      return argnames.values();
    }
    assert.deepEqual(func(1, 2, 3), {arg1: 1, arg2: 2, arg3: 3});
  });

  it('should handle anonymous functions', function() {
    var func = function(arg1, arg2, arg3) {
      return argnames.values();
    }
    assert.deepEqual(func(1, 2, 3), {arg1: 1, arg2: 2, arg3: 3});
  });


});
