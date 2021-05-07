// const array = ["a", "b", "c", "d", "e", "f", "g"];

// console.log(shakeArray(array));

export function shakeArray(array) {
  for (let i = 0; i < array.length * 2; i++) {
    const randomIndex = parseInt(Math.random() * array.length);
    const item = array[randomIndex];
    array.splice(randomIndex, 1);
    array.splice(0, 0, item);
  }

  return array;
}
