const sumAll = function (m, n) {
  if (
    typeof m === "number" &&
    typeof n === "number" &&
    m > 0 &&
    n > 0 &&
    m % 1 === 0 &&
    n % 1 === 0
  ) {
    let sum = 0;
    if (m > n) {
      temp = m;
      m = n;
      n = temp;
    }
    for (let i = m; i <= n; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
