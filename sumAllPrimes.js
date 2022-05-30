const sumPrimes = (num) => {
  let primes = [];
  const result = 0;

  //helper to check if the numer are primes or not
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0)) {
      primes.push(i);
    }
  }

  // there are to methods to make the sum
  //one is with the classical for loop which in theory is more faster
  //but also you have the reduce method which is much more simple and readable

  // for (let index = 0; index < primes.length; index++) {
  //   result += primes[index];
  // }

  return primes.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    result
  );
};

console.log(sumPrimes(977));
