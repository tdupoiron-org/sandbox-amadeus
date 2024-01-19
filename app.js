// create a function to list prime numbers from 0 to 100

function primeNumbers(n) {
  var primes = []; // Create an empty array to store prime numbers
  for (var i = 2; i <= n; i++) {
    var isPrime = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i); // Add prime number to the array
    }
  }
  console.log(primes); // Display the full array of prime numbers
}

// main

primeNumbers(100); // Call the function
