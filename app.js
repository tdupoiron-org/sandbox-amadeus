// create a function to list prime numbers from 0 to 100

function primeNumbers() {
  var primes = []; // Create an empty array to store prime numbers
  for (var i = 0; i <= 100; i++) {
    var isPrime = true;
    for (var j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
      }
    }
    if (isPrime === true) {
      primes.push(i); // Add prime number to the array
    }
  }
  console.log(primes); // Display the full array of prime numbers
}

// main

primeNumbers();
