const isString = (value) => typeof value === "string";
const isNumber = (value) => typeof value === "number";
const isUndefined = (value) => value === undefined;
const isNothing = (value) => value.length === 0;

export function sortFunction(former, latter, isIncrease) {
  const multiple = isIncrease ? 1 : -1;

  if (isUndefined(former) && isUndefined(latter)) {
    return 0;
  }

  if (isUndefined(former) && !isUndefined(latter)) {
    return 1;
  }

  if (!isUndefined(former) && isUndefined(latter)) {
    return -1;
  }

  if (isNumber(former) && isNumber(latter)) {
    return multiple * (former - latter);
  }

  if (isNothing(former) && isNothing(latter)) {
    return 0;
  }

  if (isNothing(former) && !isNothing(latter)) {
    return 1;
  }

  if (!isNothing(former) && isNothing(latter)) {
    return -1;
  }

  if (isString(former)) {
    return multiple * former.localeCompare(latter);
  } else {
    return -1 * multiple * latter.localeCompare(former);
  }
}

export default (objects, getValue, isIncrease) => {
  return objects.sort((former, latter) =>
    sortFunction(getValue(former), getValue(latter), isIncrease)
  );
};
