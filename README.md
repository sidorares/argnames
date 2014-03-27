#argnames
console.log(arguments) replacement

usage:

```js
var argnames = require('argnames');
function test(wow, such, args, here) {
  // code code
  argnames.dump();
  // code.code
}

test('foo', 'bar', 1, {});

```

prints

```js
{ wow: 'foo',
  such: 'bar',
  args: 1,
  here: {} }
```

# see also
https://github.com/ifit/Argue
