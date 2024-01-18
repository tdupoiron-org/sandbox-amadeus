const { listPrimes } = require('./app.js');

test('listPrimes returns an array', () => {
  expect(Array.isArray(listPrimes(10))).toBe(true);
});

test('listPrimes returns correct primes for n=10', () => {
  expect(listPrimes(10)).toEqual([2, 3, 5, 7]);
});

test('listPrimes returns correct primes for n=20', () => {
  expect(listPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});

test('listPrimes returns an empty array for n=1', () => {
  expect(listPrimes(1)).toEqual([]);
});