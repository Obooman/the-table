import sum from "./calculateFunctions/sum";
import avg from "./calculateFunctions/avg";
import pi from "./calculateFunctions/pi";

const insetFunctions = {
  SUM: sum,
  AVG: avg,
  PI: pi,
};

export const isFunction = (name) => name.toUpperCase() in insetFunctions;

export const getFunction = (name) => {
  return isFunction(name) && insetFunctions[name.toUpperCase()];
};
