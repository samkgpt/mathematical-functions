## GitHub Api's

![npm](https://img.shields.io/npm/v/mathematical-functions) [![Support Node of LTS](https://img.shields.io/badge/node-latest-brightgreen.svg)](https://nodejs.org/) [![dependencies Status](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](https://david-dm.org/request/request)

To calculate problems in science, engineering, and mathematical functions.

## Installation

```bash
$ npm install mathematical-functions
```

## Usage

```javascript
var { sin, cos, sqrt, fround, ... } = require("mathematical-functions");
```

## Examples

```javascript
console.log(cos(value)); // returns the cosine of a number

console.log(acos(value)); // returns the arccosine (in radians) of a number

console.log(acosh(value)); // returns the hyperbolic arc-cosine of a number

console.log(cosh(value)); // returns the hyperbolic cosine of a number

console.log(sin(value)); // returns the sine of a number

console.log(sinh(value)); // returns the hyperbolic sine of a number

console.log(asin(value)); // returns the arcsine (in radians) of a number

console.log(asinh(value)); // returns the hyperbolic arcsine of a number

console.log(tan(value)); // returns the tangent of a number

console.log(tanh(value)); // returns the hyperbolic tangent of a number

console.log(atan(value)); // returns the arctangent (in radians) of a number

console.log(atan2(x, y)); // returns the angle in the plane (in radians)

console.log(atanh(value)); // returns the hyperbolic arctangent of a number

console.log(log(value)); // returns the natural logarithm of a double value

console.log(log10(100000)); // returns expected output: 5

console.log(log1p(value)); // returns the natural logarithm (base e) of 1 + a number

console.log(log2(value)); // returns the base 2 logarithm of a number

console.log(sqrt(value)); // returns the square root of a number

console.log(exp(value)); // returns the ex, where x is the argument

console.log(expm1(value)); // returns the ex - 1, where x is the argument

console.log(percent(percent, total)); // returns the total percent

console.log(square(value)); // returns the square of a number

console.log(abs(x, y)); // returns the the absolute value of a number

console.log(cbrt(value)); // returns rounds a number up to next largest integer

console.log(clz32(value)); // returns the number of leading zero bits in the
// 32-bit binary representation of a number

console.log(exp(value)); // returns the ex, where x is the argument

console.log(expm1(value)); // returns the ex - 1, where x is the argument,
// and e the base of the natural logarithms

console.log(floor(value)); // returns the largest integer less than or equal to a given number

console.log(fround(value)); // returns the nearest 32-bit single precision float
// representation of a Number

console.log(hypot(value)); // returns the square root of the sum of squares of its arguments

console.log(imul(x, y)); // returns the result of the C-like 32-bit multiplication
// of the two parameters

console.log(power(value)); // returns the nearest 32-bit single precision float
// representation of a Number

console.log(round(value)); // returns the value of a number rounded to the
// nearest integer

console.log(sign(value)); // returns either a positive or negative +/- 1

console.log(trunc(value)); // returns the integer part of a number by removing
// any fractional digits
```

## License

[MIT license](http://opensource.org/licenses/MIT).

## Copyright

Copyright &copy; 2021. S.Gupta
