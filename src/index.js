"use strict";

module.exports = {
  cos: (value) => {
    return (value = Math.cos(value));
    //returns the cosine of a number
  },

  sin: (value) => {
    return (value = Math.sin(value));
    //returns the sine of a number
  },

  tan: (value) => {
    return (value = Math.tan(value));
    //returns the tangent of a number
  },

  log10: (value) => {
    return (value = Math.log10(value));
    //returns the base 10 logarithm of a number
  },

  sqrt: (value) => {
    return (value = Math.sqrt(value));
    //returns the square root of a number
  },

  log: (value) => {
    return (value = Math.log(value));
    // return the natural logarithm (base e) of a double value
  },

  exp: (value) => {
    return (value = Math.exp(value));
    //returns ex, where x is the argument
  },

  expm1: (value) => {
    return (value = Math.expm1(value));
    //returns ex - 1, where x is the argument
  },

  percent: (percent, total) => {
    return (percent / 100) * total;
    //returns total percent
  },

  square: (value) => {
    return (value = eval(value) * eval(value));
    //returns the square root of a number
  },

  abs: (a, b) => {
    return Math.abs(a - b);
    //returns the absolute value of a number
  },

  acos(adjacent, hypotenuse) {
    return Math.acos(adjacent / hypotenuse);
    //returns the arccosine (in radians) of a number
  },

  acosh: (value) => {
    return (value = Math.acosh(value));
    //returns the hyperbolic arc-cosine of a number
  },

  asin: (opposite, hypotenuse) => {
    return Math.asin(opposite / hypotenuse);
    //returns the arcsine (in radians) of a number
  },

  asinh: (value) => {
    return (value = Math.acos(value));
    //returns the hyperbolic arcsine of a number
  },

  atan: (opposite, adjacent) => {
    return Math.atan(opposite / adjacent);
    //returns the arctangent (in radians) of a number
  },

  atan2: (x, y) => {
    return (Math.atan2(y, x) * 180) / Math.PI;
    //returns the angle in the plane (in radians)
  },

  atanh: (value) => {
    return (value = Math.atanh(value));
    //returns the hyperbolic arctangent of a number
  },

  cbrt: (value) => {
    return (value = Math.cbrt(value));
    //returns the cube root of a number
  },

  ceil: (value) => {
    return (value = Math.ceil(value));
    //returns always rounds a number up to the next largest integer
  },

  clz32: (value) => {
    return (value = Math.clz32(value));
    //returns the number of leading zero bits in the 32-bit binary representation of a number
  },

  cosh: (value) => {
    return (value = Math.cosh(value));
    //returns the hyperbolic cosine of a number
  },

  exp: (value) => {
    return (value = Math.exp(value));
    //returns ex, where x is the argument
  },

  expm1: (value) => {
    return (value = Math.cosh(value));
    //returns ex - 1, where x is the argument, and e the base of the natural logarithms
  },

  floor: (value) => {
    return (value = Math.floor(value));
    //returns the largest integer less than or equal to a given number
  },

  fround: (value) => {
    return (value = Math.fround(value));
    //returns the nearest 32-bit single precision float representation of a Number
  },

  hypot: (value, value1) => {
    return Math.hypot(value, value1);
    // returns the square root of the sum of squares of its arguments
  },

  imul: (value, value1) => {
    return Math.imul(value, value1);
    //returns the result of the C-like 32-bit multiplication of the two parameters
  },

  log1p: (value) => {
    return (value = Math.log1p(value));
    //returns the natural logarithm (base e) of 1 + a number
  },

  log2: (value) => {
    return (value = Math.log2(value));
    //returns the base 2 logarithm of a number
  },

  power: (value, value1) => {
    return Math.pow(value, value1);
    //returns the nearest 32-bit single precision float representation of a Number
  },

  round: (value) => {
    return Math.round(value);
    //returns the value of a number rounded to the nearest integer
  },

  sign: (value) => {
    return (value = Math.sign(value));
    //returns either a positive or negative +/- 1
  },

  sinh: (value) => {
    return (value = Math.sinh(value));
    //returns tthe hyperbolic sine of a number
  },

  tanh: (value) => {
    return (value = Math.tanh(value));
    //returns the hyperbolic tangent of a number
  },

  trunc: (value) => {
    return (value = Math.trunc(value));
    //returns the integer part of a number by removing any fractional digits
  },
};
