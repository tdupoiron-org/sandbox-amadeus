// create a function to list prime numbers from 0 to 100

function primeNumbers(n) {
  var primes = []; // Create an empty array to store prime numbers
  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i); // Add prime number to the array
    }
  }
  console.log(primes); // Display the full array of prime numbers
}

// generate a function to test is a number is prime

function isPrime(n) {
  var isPrime = true;
  for (var j = 2; j <= Math.sqrt(n); j++) {
    if (n % j === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

// main

primeNumbers(100); // Call the function
