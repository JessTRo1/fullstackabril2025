function handleGetRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(handleGetRandom(50, 500)); 