const cache: Record<number, number> = {};

const fib = (n: number): number => {
  //Base case of terminating case

  if (n <= 1) return n;
  if (cache[n]) return cache[n];

  cache[n] = fib(n - 1) + fib(n - 2);

  return cache[n];
};

export const climbStairs = (n: number): number => {
  return fib(n + 1);
};
