# continued-fraction

[Continued fractions](https://en.wikipedia.org/wiki/Continued_fraction)
are pretty great.

You can use them to compute transcendental real numbers!

# example

## e

``` js
var cf = require('continued-fraction');
var n = cf(
    function (n) { return (n - 2) % 3 ? 1 : 2 * ((n - 2) / 3) },
    function (n) { return 1 }
);
console.log(n);
```

```
2.7182818284590455
```

## pi

``` js
var cf = require('continued-fraction');
var n = cf(
    function (n) { return 2 * (n - 1) + 1 },
    function (n) { return n * n }
);
console.log(4/n);
```

```
3.141592653589793
```

# methods

``` js
var cf = require('continued-fraction');
```

## var n = cf(f, g)

Evaluate a continued fraction given two functions `f` and `g` which will be
evaluated with a parameter `i`, a set index starting at 1 for sets `a` and `b`
of the
[generalized form](https://en.wikipedia.org/wiki/Generalized_continued_fraction).

Returns a float `n`.

# install

With [npm](https://npmjs.org) do:

```
npm install continued-fraction
```

# license

MIT
