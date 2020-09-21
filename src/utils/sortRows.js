import { sortModes } from "../models/sorter";
import { sortFunction } from "./sort";

export default function sortRows(data, sorters) {
  let rows = {};

  function sortSheet(arr, sorters) {
    if (sorters.length === 0) {
      return arr;
    }

    return arr.sort((former, latter) => {
      let sorterIndex = sorters.length - 1;
      let result = 0;
      const { sortMode, column } = sorters[sorterIndex];
      while (!(result !== 0 || sorterIndex < 0)) {
        result = sortFunction(
          former[column]?.value,
          latter[column]?.value,
          sortMode === sortModes.increase
        );
        sorterIndex--;
      }
      return result;
    });
  }

  const sortedArr = sortSheet(Object.values(data), sorters);

  sortedArr.forEach((row, index) => {
    rows[index] = row;
  });

  return {
    rows: rows,
  };
}
