const zigzag = inp => {
  const m = inp.length - 1;
  const edges = [];
  for (let x = 0; x <= m; x++) edges.push([x, 0]);
  for (let x = 1; x <= m; x++) edges.push([m, x]);
  return edges.flatMap(([x, y], i) => {
    const path = [[x, y]];
    for (let a = x, b = y; a != y && b != x;) path.push([--a, ++b]);
    return (i % 2 ? path : path.reverse()).map(([x, y]) => inp[x][y]);
  });
}