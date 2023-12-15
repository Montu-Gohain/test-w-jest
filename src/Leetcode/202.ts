// Todo : 202. Happy Number

export function isHappy(n: number): boolean {
  const getSumofSquares = (num: number): number => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  // Todo : Using Floyd's cycle detection algorithm.
  let slow = n;
  let fast = n;

  do {
    slow = getSumofSquares(slow);
    fast = getSumofSquares(getSumofSquares(fast));
  } while (slow !== fast);

  return slow === 1;
}
