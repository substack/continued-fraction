var cf = require('../');
var n = cf(
    function (n) { return 2 * (n - 1) + 1 },
    function (n) { return n * n }
);
console.log(4/n);
