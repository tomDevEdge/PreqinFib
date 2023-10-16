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

  // Log the nth Fibonacci number modulo 1000000007
  console.log(`The Fibonacci number at position ${n} is ${fib[n]}`);
}

// Testing
nthFibonacci(0); // Expected output: 0
nthFibonacci(1); // Expected output: 1
nthFibonacci(2); // Expected output: 1
nthFibonacci(5); // Expected output: 5
nthFibonacci(10); // Expected output: 55
nthFibonacci(20); // Expected output: 6765


// Edge cases
(nthFibonacci(100)); // Expected output: 782204094 (large Fibonacci number)
