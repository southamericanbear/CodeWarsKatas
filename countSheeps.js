const sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

//first approach

const countSheeps = (arrOfSheeps) => {
  let count = 0;

  for (let i = 0; i < arrOfSheeps.length; i++) {
    if (arrOfSheeps[i]) {
      count += 1;
    }
  }
  return count;
};

//secon approach

const countSheepsWithFilterMethod = (arrOfSheeps) => {
  return arrOfSheeps.filter(Boolean).length;
};
