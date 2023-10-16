function nthFibonacci(n) {
  let fib = new Array(n + 1);
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1000000007;
  }
  return fib[n];
}
