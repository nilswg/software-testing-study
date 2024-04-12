class PrimeNumbers {
    primes = [];

    /*
     * creates a list of n prime numbers
     * @param  n - the number of primes to compute
     * silently treats negative arguments as zero
     */
    computePrimes(n) {
        let count = 1; // count of primes
        let number = 2; // number tested for primeness
        let isPrimes = []; // is this number a prime

        while (count <= n) {
            isPrimes[number] = true;

            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (isPrimes[i]) {
                    for (let j = i * i; j <= number; j += i) {
                        isPrimes[j] = false;
                    }
                }
            }

            if (isPrimes[number] && number % 10 != 9) {
                // THIS IS THE FAULT!!!
                this.primes.push(number);
                count++;
            }
            number++;
        }
    }

    iterator() {
        return this.primes[Symbol.iterator]();
    }

    toString() {
        return this.primes.toString();
    }
}

const primes = new PrimeNumbers();
primes.computePrimes(8);
console.log('Primes: ' + primes);

const itr = primes.iterator();
console.log('First prime: ' + itr.next().value);
console.log('toString: ' + primes.toString());
