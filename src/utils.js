// eslint-disable-next-line import/prefer-default-export
export const getRandomDigit = (min, max) => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
};
