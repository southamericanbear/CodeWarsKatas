//only if there is whole numbers
const stringToNumber = (str) => {
  return Number(str.replace(/\D+/g, ""));
};
