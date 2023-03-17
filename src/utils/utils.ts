// Binary Search, assuming the arrangement is ordered, return the index a entered value
export const binarySearch = (array: number[], value: number) => {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    var guess = Math.floor((min + max) / 2);
    if (array[guess] === +value) return guess;
    array[guess] < +value ? (min = guess + 1) : (max = guess - 1);
  }
  return -1;
};
