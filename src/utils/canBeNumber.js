export default (value) => {
  if (typeof value === "number") {
    return true;
  }

  if (typeof value !== "string") {
    return false;
  }

  if (value.length === 0) {
    return false;
  }

  // eslint-disable-next-line no-self-compare
  return +value === +value;
};
