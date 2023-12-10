export const numbersStringToArray = (numbersString) => {
  return numbersString.split('').map((numberString) => Number(numberString));
};
