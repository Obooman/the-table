export default {
  state: {
    mode: "" /* focused | editing */,
    expression: "",
    selectedValue: {
      /* row,col */
    },
    cell: {
      width: 60,
      height: 20,
    },
    scrollPosition: {
      scrollLeft: 0,
      scrollTop: 0,
    },
  },
  reducers: {
    updateScrollPosition(state, payload) {
      return {
        ...state,
        scrollPosition: payload,
      };
    },
  },
  effects: (dispatch) => ({}),
};
