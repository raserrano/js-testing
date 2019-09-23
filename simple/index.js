var assert = require('assert');

console.log('This is working');

var status=true;
assert(status,'Finish execution');
status=false;
assert(status,'An assertion fail');
