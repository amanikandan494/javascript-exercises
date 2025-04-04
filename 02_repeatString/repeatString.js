const repeatString = function (str, num) {
  let repeatedStr = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
