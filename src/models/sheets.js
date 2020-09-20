export default {
  state: {
    rows: {},
  },
  reducers: {
    updateValue(state, payload) {
      return {
        ...state,
        rows: {
          ...state.rows,
          [payload.row]: {
            ...state.rows[payload.row],
            [payload.column]: payload,
          },
        },
      };
    },
    changeRow(state, payload) {
      const row = state.rows[999];
      delete state.rows[999];
      return {
        ...state,
        rows: {
          0: row,
        },
      };
    },
    rebuildSheets(state, payload) {
      return payload;
    },
  },
  effects: {},
};
