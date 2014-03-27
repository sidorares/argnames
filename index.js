var esprima = require('esprima');
var util    = require('util');

function argnames(func) {
  func = func || arguments.callee.caller;
  var src = func.toString();
  // "a=" prefix is because anonymous function is not valid js program
  return esprima.parse('a=' + src).body[0].expression.right.params;
}

argnames.values = function(func) {
  func = func || arguments.callee.caller;
  var signature = argnames(func);
  var args = func.arguments;

  var max = args.length;
  if (signature.length > max)
    max = signature.length;

  var res = {};
  for (var i=0; i < max; ++i) {
    if (i < signature.length)
      res[signature[i].name] = args[i];
    else
      res[i] = args[i];
  }
  return res;
}

argnames.dump = function()
{
  var func = arguments.callee.caller;
  console.log(util.inspect(argnames.values(func), {colors: true}));
}

module.exports = argnames;
