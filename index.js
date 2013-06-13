module.exports = function (f, g, r) {
    if (r === undefined) r = 1;
    for (var i = 100; i > 0; i--) {
        r = f(i) + g(i) / r;
    }
    return r;
};
