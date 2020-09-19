export default (number) => {
  const first = parseInt(number) % 26;
  const second = parseInt(number / 26) % 26;
  const third = parseInt(number / 26 / 26) % 26;
  return (
    String.fromCharCode(first + 64) +
    String.fromCharCode(second + 64) +
    String.fromCharCode(third + 64)
  );
};
