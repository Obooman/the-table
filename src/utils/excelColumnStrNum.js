var ordA = "a".charCodeAt(0);
var ordZ = "z".charCodeAt(0);
var length = ordZ - ordA + 1;

// https://stackoverflow.com/a/8241071/4670002
export function numberToColumnString(number) {
  var str = "";
  while (number >= 0) {
    str = String.fromCharCode((number % length) + ordA) + str;
    number = Math.floor(number / length) - 1;
  }
  return str;
}

// https://stackoverflow.com/a/9906193/4670002
export function columnStringToNumber(string) {
  let i;
  let j;
  let result = 0;

  for (i = 0, j = string.length - 1; i < string.length; i += 1, j -= 1) {
    result += Math.pow(length, j) * (string[i].charCodeAt(0) - ordA + 1);
  }

  return result - 1;
}
