import time

# generate a function to test if a number is prime
def is_prime(num):
  """
  Check if a number is prime.

  Args:
    num (int): The number to check.

  Returns:
    bool: True if the number is prime, False otherwise.
  """
  for i in range(2, num):
    if num % i == 0:
      return False
  return num > 1

# generate a function to list all prime numbers up to a given number
def list_primes(num):
    sieve = [False] * (num+1)
    primes = []
    for i in range(2, num+1):
        if sieve[i] == False:
            primes.append(i)
            for j in range(i*2, num+1, i):
                sieve[j] = True
    return primes

# generate the main function to test if a number is prime
def main():
    num = 300000
    start_time = time.time() # get the current time in seconds
    primes = list_primes(num)
    end_time = time.time() # get the current time in seconds

    print(f"There are {len(primes)} prime numbers between 0 and {num}")
    print(f"Processing time: {(end_time - start_time) * 1000} milliseconds") # convert seconds to milliseconds

main()