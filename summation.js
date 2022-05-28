const summation = (num) => {
  if (num <= 0) return;
  let allNumbers = 0;
  for (let index = 0; index < num; index++) {
    allNumbers += index + 1;
  }

  return allNumbers;
};

const opposite = (num) => {
  return -num;
};

console.log(opposite(10.6));
