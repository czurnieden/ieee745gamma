# IEEE-754 compliant LogGamma function

The log(gamma) function in JavaScript as defined in IEEE-745.

[![browser support](https://github.com/czurnieden/ieee745gamma/badge.png)](https://github.com/czurnieden/ieee745gamma/ieee745gamma.js)

# Version

1.0.0

# Introduction

This is a port of the implementation of lngamma by Sun Microsystems who published the original under the following license:

```
Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.

Developed at SunPro, a Sun Microsystems, Inc. business.
Permission to use, copy, modify, and distribute this
software is freely granted, provided that this notice
is preserved.
```

That license is compatible with the MIT license.


A normal gamma function is implemented, too, but only with `Math.exp()` which induces a large error, especially for larger numbers. See the examples for details.

A correct exponential function is planned for a later version.

# Example

The correct results to 38 decimal digits in the comments

```
> var g = require('ieee745gamma')
> g.gamma(11)
3628800.0000000084      // 3628800.0000000000000000000000000000000
> g.gamma(171)
7.257415615308056e+306  // 7.2574156153079989673967282111292631147 E306
// errors of gamma due to Math.exp():
> g.lngamma(171)
706.5730622457874       // 706.57306224578734711072226272129831468
> g.lngamma(11)
15.104412573075518      // 15.104412573075515295225709329251070372
> g.lngamma(1000000)
12815504.569147611      // 12815504.569147611659976971785017113154
> g.lngamma(.0001)
9.210282658633961       // 9.2102826586339622584486579752729991548
> g.lngamma(3)
0.6931471805599453      // 0.69314718055994530941723212145817656808
> g.lngamma(3) - Math.log(2)
0                       // 0

# Methods

## gamma(x)
Returns `exp(log(gamma(x)))` for real `x`, `x` not a negative integer, over the range of ca.  -177.6 <= x <= 171.7, `Infinity` otherwise.

## lngamma(x)
Returns `log(gamma(x))` for real `x`, `x` not a negative integer, over the range of ca.  -10^14 <= x <= 10^305, `Infinity` otherwise.

# Install

With [npm](http://npmjs.org) do:

```
npm install ieee745gamma
```

# License

MIT
