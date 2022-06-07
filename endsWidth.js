function solution1(start, end) {
  if (typeof end !== "string") return false;
  const endLength = end.length;
  const startLength = start.length;
  let compare = [];
  let result = startLength - endLength;

  for (let i = startLength + 1; i >= result; i--) {
    compare.push(start[i]);
  }

  return compare.reverse().join("") === end;
}

//also we have a method in js to check if ends with that and will be like this

const solution2 = (start, end) => {
  return start.endsWith(end);
};
