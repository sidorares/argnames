var esprima = require('esprima');

function argnames(func) {
  var res = {};
  var args = arguments.callee.caller.arguments;
  var argnum = args.length;
  var params = esprima.parse(arguments.callee.caller.toString()).body[0].params;
  for (var i=0; i < argnum; ++i) {
    if (i < params.length)
      res[params[i].name] = args[i];
    else
      res[i] = args[i];
  }
  console.log(res);
}

function test(a, b, c, d, e) {
   argnames();
}

test(1,2,3, 4, 5, 6, 7, 8, "aaa");
