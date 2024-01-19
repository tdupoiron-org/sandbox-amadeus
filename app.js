// create a function to list prime numbers from 0 to 100

function primeNumbers() {
  for (var i = 2; i <= 100; i++) {
    var isPrime = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

// main

primeNumbers();
