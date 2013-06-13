var cf = require('../');
var n = cf(
    function (n) { return (n - 2) % 3 ? 1 : 2 * ((n - 2) / 3) },
    function (n) { return 1 }
);
console.log(n);
