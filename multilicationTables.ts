export function multiplicationTable (size: number): number[][] {
   let tables: number[][] = []
  for (let baseNumber = 1; baseNumber <= size; baseNumber++){
    let row = []
    for (let n = 1; n <= size; n++){
       row.push(baseNumber * n)
    }

   tables.push(row)
  }
  return tables
}