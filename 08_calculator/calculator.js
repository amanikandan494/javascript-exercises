const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (item of arr) {
    sum += item;
  }
  return sum;
};

const multiply = function (arr) {
  let product = 1;
  for (let item of arr) {
    product *= item;
  }
  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
