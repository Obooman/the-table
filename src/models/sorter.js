import sortRows from "../utils/sortRows";

export const sortModes = {
  increase: "increase",
  decrease: "decrease",
};

export default {
  state: {
    sortType: {},
    sorters: [],
  },
  reducers: {
    updateSorter(state, { nextSorters, currentSorter }) {
      const sortType = {
        ...state.sortType,
        [currentSorter.column]: currentSorter,
      };

      if (!currentSorter.sortMode) {
        delete sortType[currentSorter.column];
      } else {
        sortType[currentSorter.column] = currentSorter;
      }

      return {
        sorters: nextSorters,
        sortType,
      };
    },
  },
  effects: (dispatch) => ({
    sort({ column }, globalState) {
      const { sortType, sorters } = globalState.sorter;
      let currentSorter = sortType[column];
      let nextSorters;

      console.log("currentSorter", currentSorter);

      if (!currentSorter) {
        currentSorter = {
          column,
          sortMode: sortModes.increase,
        };
        nextSorters = [...sorters, currentSorter];
      } else if (currentSorter.sortMode === sortModes.increase) {
        currentSorter.sortMode = sortModes.decrease;
        nextSorters = sorters
          .filter((sorter) => sorter.column !== column)
          .concat([currentSorter]);

        console.log("nextSorters", nextSorters);
      } else {
        currentSorter.sortMode = null;
        nextSorters = sorters.filter((sorter) => sorter.column !== column);
      }

      dispatch.sorter.updateSorter({
        nextSorters,
        currentSorter,
      });

      dispatch.sheets.rebuildSheets(
        sortRows(globalState.sheets.rows, nextSorters)
      );
    },
  }),
};
