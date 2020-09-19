import getDecimalTimes from "../getDecimalTimes";

export default function SUM(...numbers) {
  let index = 0;
  let sum = 0;
  let times = 0;

  while (index < numbers.length) {
    let value = numbers[index];

    if (typeof value === "string") {
      value = Number(value);
    }

    if (!(typeof value === "number")) {
      value = 0;
    }

    const decimalTimes = getDecimalTimes(value);

    if (decimalTimes > times) {
      sum *= Math.pow(10, decimalTimes - times);
      value *= Math.pow(10, decimalTimes);
      times = decimalTimes;
    } else if (decimalTimes <= times) {
      value *= Math.pow(10, times);
    }

    sum += value;
    index++;
  }

  return sum / Math.pow(10, times);
}
