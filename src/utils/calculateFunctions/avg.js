import sum from "./sum";

export default (...numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  return sum(...numbers) / numbers.length;
};
