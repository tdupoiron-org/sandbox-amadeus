# Sandbox-Amadeus

This is a JavaScript project that includes a function to list prime numbers up to a given number.

## Files

- [app.js](app.js): This is the main JavaScript file that contains the `listPrimes` function.
- [app.test.js](app.test.js): This file contains the unit tests for the `listPrimes` function.
- [package.json](package.json): This file contains the metadata of the project and its dependencies.

## Function

### listPrimes(n)

This function takes a number `n` and returns an array of prime numbers up to `n`.

#### Parameters

- `n` (Number): The number up to which to list prime numbers.

#### Returns

- (Array): An array of prime numbers up to `n`.

## Tests

The tests for the `listPrimes` function are in the [app.test.js](app.test.js) file. They check the following:

- `listPrimes` returns an array.
- `listPrimes` returns the correct prime numbers for `n=10` and `n=20`.
- `listPrimes` returns an empty array for `n=1`.

To run the tests, use the following command:

```sh
npm test