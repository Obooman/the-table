// import store from "../models/index";

// the design is have an ZZZ * 99999999 sheet
export const isVariable = (name) => {
  return /^[a-z]{1,3}\d{1,8}$$/gim.test(name);
};

export const getVariableValue = (name) => {
  // const [, col, rows] = /^([a-z]+)(\d+)$/.match(name);
  // return store.getState().sheets.rows?.[rows]?.[col] || 0;
  return 0;
};
