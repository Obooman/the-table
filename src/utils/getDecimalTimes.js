export default (number) => {
  const numberString = number.toString();
  if (!/\./.test(numberString)) {
    return 0;
  }

  return numberString.length - numberString.indexOf(".") - 1;
};
