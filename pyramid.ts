export function pyramid(n: number): Array<Array<Number>> {
  let pyramidArr: number[] = [];

  for (let i = 0; i < n; i++) {
    const newArr: number[] = new Array(i + 1).fill(1);

    pyramidArr.push(newArr);
  }

  return pyramidArr;
}
