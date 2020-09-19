const row11 = {
  row: 11,
};
const row12 = {
  row: 12,
};
const col1 = {
  col: 1,
};

const A12 = {
  row: row12,
  col: col1,
  value: 25,
  refedBy: [],
  isExpression: true,
  expression: "A11*2+1",
};

const A11 = {
  row: row11,
  col: col1,
  value: 12,
  refedBy: [A12],
  isExpression: true,
  expression: "1+4*2+SUM(1,2)",
};

export default {
  state: {
    rows: {
      11: {
        A: A11,
      },
      12: {
        A: A12,
      },
    },
    columns: {
      A: {
        11: A11,
        12: A12,
      },
    },
  },
  reducers: {
    updateValue(state, payload) {
      return {
        ...state,
        rows: {
          ...state.rows,
          [payload.row]: {
            ...state.rows[payload.row],
            [payload.column]: payload.value,
          },
        },
      };
    },
  },
  effects: {},
};
