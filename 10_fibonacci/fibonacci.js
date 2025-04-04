const fibonacci = function (n) {
// adding a '+' before n is to convert n to a number if n is originally string
  if (+n === 0) {
    return 0;
  } else if (+n === 1) {
    return 1;
  } else if (+n > 1) {
    return fibonacci(+n - 1) + fibonacci(+n - 2);
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
