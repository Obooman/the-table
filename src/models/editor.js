export const modes = {
  normal: "normal",
  focused: "focused",
  editing: "editing",
};

export default {
  state: {
    mode: modes.normal,
    cell: {
      width: 60,
      height: 20,
    },
    scrollPosition: {
      scrollLeft: 0,
      scrollTop: 0,
    },
    focusCell: {
      row: 0,
      col: 0,
    },
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
  },
  effects: (dispatch) => ({}),
};
