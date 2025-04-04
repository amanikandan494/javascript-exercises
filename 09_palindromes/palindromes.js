const palindromes = function (str) {
  let regex = /^[a-zA-Z0-9]$/;
  const strArr = str.split("");

  const modArr = [];
  const revArr = [];
  strArr.forEach((char) => {
    if (regex.test(char)) {
      modArr.push(char.toLowerCase());
    }
  });

  modArr.forEach((char) => {
    revArr.unshift(char);
  });

  if (revArr.join("") === modArr.join("")) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
