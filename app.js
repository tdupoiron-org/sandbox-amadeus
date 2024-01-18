/**
 * Checks if a number is prime.
 * @param {number} n - The number to be checked.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(n) {
  if (n < 2) return false;
  let sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++)
    if (n % i == 0) return false;
  return true;
}

/**
 * Generates a list of prime numbers up to a given number.
 * @param {number} n - The upper limit of the range.
 * @returns {number[]} - An array of prime numbers.
 */
function listPrimes(n) {
  let primes = [];
  for (let i = 0; i <= n; i++)
    if (isPrime(i)) primes.push(i);
  return primes;
}

/**
 * Executes the main logic of the program.
 */
function main() {
  let startTime = Date.now(); // Start time

  let n = 300000; // Upper limit of the range

  let primes = listPrimes(n);
  // console.log(primes);

  // Display how many numbers are prime
  console.log(`There are ${primes.length} prime numbers from 0 to ${n}.`);

  let endTime = Date.now(); // End time
  let processingTime = endTime - startTime; // Calculate processing time
  console.log(`Processing time: ${processingTime}ms`);
}

main();

// export functions
module.exports = { isPrime, listPrimes };