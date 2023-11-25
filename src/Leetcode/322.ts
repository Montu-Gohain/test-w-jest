// ? 322. Coin Change

/*
 * Input

 coins = [1,2,5], total_amount = 11
 ans : 5 + 5 + 1
 output = 3

*/

export const coinChange = (coins: number[], amount: number): number => {
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Because for amount 0, we need zero coins

  for (let i = 1; i <= amount; ++i) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
