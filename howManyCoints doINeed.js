const getChange = (coins, amount) => {
  //First create a table with infinity numbers
  const table = new Array(amount + 1).fill(Infinity);
  //define index 0 equal to 0
  table[0] = 0;

  //now we iterate across the array of coins and then we compare it against the table
  for (let coin of coins) {
    for (let i = 0; i < table.length; i++) {
      // we check if the coin is less then or equal to the number in the current index
      //if it is we will give the potencial amount
      //and then we update the current iteration of where we are in the table
      if (coin <= i) {
        let idx = i - coin;
        let potentialAmount = table[idx] + 1;
        table[i] = Math.min(potentialAmount, table[i]);
      }
    }
  }
  // finally we check with a ternary operator if the last number of the table is equal to infinity which mean
  // is not found we return -1 else we return table with the correct result.
  return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};

console.log(getChange([1, 5, 10], 7));
