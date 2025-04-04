const reverseString = function (str) {
  let revStr = [];
  let strArr = str.split("");
  for (let i = strArr.length - 1; i >= 0; i--) {
    revStr.push(strArr[i]);
  }
  return revStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
