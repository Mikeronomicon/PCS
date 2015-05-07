var mapLib = require('./map');

var empty = [];
var one = [2];
var some = [4, 8, 13, 2];

var square = function(n) {return n * n};
var triple = function(n) {return n * 3};

function arrayEq(left, right) {
  if (left.length !== right.length) {
    throw new Error("The arrays didn't have the same length. Expected: " + left + "\nGot: " + right);
  }
  left.forEach(function(elem, index) {
    if (elem !== right[index]) {
      throw new Error("The arrays' elements didn't match. Expected: " + left + "\nGot: " + right)
    }
  })
}

arrayEq([], mapLib.map(empty, square))
arrayEq([4], mapLib.map(one, square))
arrayEq([16, 64, 169, 4], mapLib.map(some, square))

arrayEq([], mapLib.map(empty, triple))
arrayEq([6], mapLib.map(one, triple))
arrayEq([12, 24, 39, 6], mapLib.map(some, triple))

console.log('success!')
