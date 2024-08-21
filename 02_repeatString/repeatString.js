const repeatString = function (string, num) {
  let stringRepeat = string;
  if (num === 0) {
    return ``;
  } else if (num < 0) {
    return `ERROR`;
  } else {
    for (i = 1; i < num; i++) {
      stringRepeat += string;
    }
    return stringRepeat;
  }
};

// Do not edit below this line
module.exports = repeatString;
