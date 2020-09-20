import { sortModes } from "../models/sorter";

const isString = (value) => typeof value === "string";
const isNumber = (value) => +value + 1 - +value === 1;
const isUndefined = (value) => value === undefined;

export default function sortRows(data, sorters) {
  let rows = {};

  function sortTwoItems(former, latter) {
    let result = 0;
    let index = sorters.length - 1;
    while (index >= 0 && result === 0) {
      const { column, sortMode } = sorters[index];

      if (!former || !latter) {
        result = 0;
      }

      const formerValue = former?.[column]?.value;
      const latterValue = latter?.[column]?.value;

      if (isUndefined(formerValue) && isUndefined(formerValue)) {
        result = 0;
      }

      if (sortMode === sortModes.increase) {
        if (isUndefined(formerValue) && !isUndefined(latterValue)) {
          result = -1;
        } else if (!isUndefined(formerValue) && isUndefined(latterValue)) {
          result = 1;
        } else if (isString(formerValue) && isNumber(latterValue)) {
          result = -1;
        } else if (isNumber(formerValue) && isString(latterValue)) {
          result = 1;
        } else if (isString(formerValue) && isString(latterValue)) {
          result = formerValue.localeCompare(latterValue);
        } else {
          result = formerValue - latterValue;
        }
      } else {
        if (isUndefined(formerValue) && !isUndefined(latterValue)) {
          result = 1;
        } else if (!isUndefined(formerValue) && isUndefined(latterValue)) {
          result = -1;
        } else if (isString(formerValue) && isNumber(latterValue)) {
          result = 1;
        } else if (isNumber(formerValue) && isString(latterValue)) {
          result = -1;
        } else if (isString(formerValue) && isString(latterValue)) {
          result = latterValue.localeCompare(formerValue);
        } else {
          result = latterValue - formerValue;
        }
      }

      index--;
    }

    return result;
  }

  const sortedArr = Object.values(data).sort((former, latter) => {
    return sortTwoItems(former, latter);
  });

  sortedArr.forEach((row, index) => {
    rows[index] = row;
  });

  return {
    rows: rows,
  };
}
