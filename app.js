// create a function to list prime numbers from 0 to 100

function primeNumbers() {
  for (var i = 0; i <= 100; i++) {
    var isPrime = true;
    for (var j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
      }
    }
    if (isPrime === true) {
      console.log(i);
    }
  }
}

// main

primeNumbers();
