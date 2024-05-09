export const getRandomInt = (min, max, inclusive = true) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + (inclusive ? 1 : 0))) + min;
}