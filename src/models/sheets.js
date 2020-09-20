const initialState = {
  rows: {},
  columns: {},
};

export default {
  state: initialState,
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
      const row = state.rows[11];
      delete state.rows[11];
      return {
        ...state,
        rows: {
          ...state.rows,
          13: row,
        },
      };
    },
  },
  effects: {},
};
