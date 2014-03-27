var argnames = require('../index.js');

function test(arg1, arg2, arg3) {
  argnames.dump();
}

function test1(wow, such, args, here) {
  argnames.dump()
}

test('one', 2, 'three', 'four');
test('one');

test1('foo', 'bar', 1, {});
