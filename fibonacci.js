function nthFibonacci(n) {
  // Initialize an array to store the Fibonacci numbers
  let fib = new Array(n + 1);
  fib[0] = 0;
  fib[1] = 1;

  // Calculate the Fibonacci numbers up to the nth number
  for (let i = 2; i <= n; i++) {
    // Use memoization to avoid redundant calculation
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1000000007;
  }

  // Return the nth Fibonacci number modulo 1000000007
  return fib[n];
}
