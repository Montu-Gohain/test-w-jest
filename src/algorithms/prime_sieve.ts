// Todo : Let's write the most efficient algorithm to find prime numbers.

export const prime_sieve = (limit: number): number[] => {
  const primes: boolean[] = [];
  const results: number[] = [];

  // Todo : Initially assuming every number till the given limit is a prime number.

  for (let i = 2; i <= limit; i++) {
    primes[i] = true;
  }

  for (let p = 2; p * p <= limit; p++) {
    if (primes[p]) {
      for (let i = p * p; i <= limit; i += p) {
        primes[i] = false;
      }
    }
  }

  // Todo : Let's insert only prime numbers in the results array.

  for (let i = 2; i <= limit; i++) {
    if (primes[i]) {
      results.push(i);
    }
  }

  return results;
};

const primes_till_80 = prime_sieve(80);

console.log("Prime numbers till 80 : ", primes_till_80.join(","));
