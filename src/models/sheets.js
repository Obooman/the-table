const initialState = {
  rows: {
    11: {},
    12: {},
  },
  columns: {
    1: {},
  },
};

const A12 = {
  row: initialState.rows[12],
  col: initialState.columns[1],
  value: 25,
  refedBy: [],
  isExpression: true,
  expression: "A11*2+1",
};

const A11 = {
  row: initialState.rows[11],
  col: initialState.columns[1],
  value: 12,
  refedBy: [A12],
  isExpression: true,
  expression: "1+4*2+SUM(1,2)",
};

initialState.rows[11][1] = A11;
initialState.rows[12][1] = A12;

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
