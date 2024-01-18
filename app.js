// generate a function to test if a number is prime

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

// generate a function to list all prime numbers up to a given number

function listPrimes(num) {
  let sieve = [], i, j, primes = [];
  for (i = 2; i <= num; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

// generate the main function to test if a number is prime

function main() {
  var num = 300000;
  var startTime = new Date().getTime(); // get the current time in milliseconds
  var primes = listPrimes(num);
  var endTime = new Date().getTime(); // get the current time in milliseconds

  console.log("There are " + primes.length + " prime numbers between 0 and " + num);
  console.log("Processing time: " + (endTime - startTime) + " milliseconds");
}

main();