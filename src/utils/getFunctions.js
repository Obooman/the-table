import sum from "./calculateFunctions/sum";
import avg from "./calculateFunctions/avg";

const insetFunctions = {
  SUM: sum,
  AVG: avg,
};

export const isFunction = (name) => name.toUpperCase() in insetFunctions;

export const getFunction = (name) => {
  return isFunction(name) && insetFunctions[name.toUpperCase()];
};
