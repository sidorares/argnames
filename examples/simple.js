var argnames = require('../index.js');

function test(arg1, arg2, arg3) {
  argnames.dump();
}

test('one', 2, 'three', 'four');
test('one');
