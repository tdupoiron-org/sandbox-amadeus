import math
import time

def is_prime(n):
    """
    Checks if a number is prime.
    :param n: The number to be checked.
    :return: True if the number is prime, false otherwise.
    """
    if n < 2:
        return False
    sqrt = math.isqrt(n)
    for i in range(2, sqrt + 1):
        if n % i == 0:
            return False
    return True

def list_primes(n):
    """
    Generates a list of prime numbers up to a given number.
    :param n: The upper limit of the range.
    :return: A list of prime numbers.
    """
    primes = []
    for i in range(n + 1):
        if is_prime(i):
            primes.append(i)
    return primes

def main():
    """
    Executes the main logic of the program.
    """
    start_time = time.time()  # Start time

    n = 300000  # Upper limit of the range

    primes = list_primes(n)

    # Display how many numbers are prime
    print(f"There are {len(primes)} prime numbers from 0 to {n}.")

    end_time = time.time()  # End time
    processing_time = end_time - start_time  # Calculate processing time
    print(f"Processing time: {processing_time * 1000}ms")

if __name__ == "__main__":
    main()