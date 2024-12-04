function printPrimesBetween(Number1, Number2) {
  let start = Math.min(Number1, Number2);
  let end = Math.max(Number1, Number2);
  function isPrimes(Number) {
    if (Number < 2) return false; // not primes
    for (let i = 2; i <= Math.sqrt(Number); i++)
      if (Number % i === 0)
        //If divisible by any number, not prime
        return false;

    return true;
  }
  for (let i = start; i <= end; i++) 
    if (isPrimes(i))
     console.log(i);
}
printPrimesBetween(1, 20);
