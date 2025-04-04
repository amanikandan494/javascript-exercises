const removeFromArray = function (arr, ...arg) {
  const modArr = [...arr]; //Cannot assign an array directly as it will just be another reference to original array
  for (const element of arg) {
    arr.forEach((e) => {
      if (e === element) {
        let index = modArr.indexOf(e);
        modArr.splice(index, 1);
      }
    });
  }
  return modArr;
};

// Do not edit below this line
module.exports = removeFromArray;
