import { cellSize } from "../theTableConfig.json";

export const modes = {
  normal: "normal",
  focused: "focused",
  editing: "editing",
};

export default {
  state: {
    mode: modes.normal,
    cell: {
      width: cellSize[0],
      height: cellSize[1],
    },
    scrollPosition: {
      scrollLeft: 0,
      scrollTop: 0,
    },
    focusCell: {
      row: 0,
      col: 0,
    },
    editingValue: "",
  },
  reducers: {
    updateScrollPosition(state, payload) {
      return {
        ...state,
        scrollPosition: payload,
      };
    },
    updateMode(state, payload) {
      return {
        ...state,
        mode: payload,
      };
    },
    updateFocusCell(state, payload) {
      return {
        ...state,
        focusCell: payload,
      };
    },
    updateEditingValue(state, payload) {
      return {
        ...state,
        editingValue: payload,
      };
    },
  },
  effects: (dispatch) => ({}),
};
