// Introduction to Software Testing
// Authors: Paul Ammann & Jeff Offutt
// Chapter 3; page ??
/*
 * CLASS NAME: PrimesNumbers
 *               Class to compute N prime numbers
 * ORIGINAL AUTHOR: Michael Wilson
 *
 * NOTE: The class has a fault that results in false negatives: primes ending in 9 are missing
 *
 */
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
        let isPrime; // is this number a prime

        while (count <= n) {
            isPrime = true;
            for (let divisor = 2; divisor <= number / 2; divisor++) {
                if (number % divisor == 0) {
                    isPrime = false;
                    break; // for loop
                }
            }
            if (isPrime && number % 10 != 9) {
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
/*
const primes = new PrimeNumbers();
primes.computePrimes(8);
console.log('Primes: ' + primes);

const itr = primes.iterator();
console.log('First prime: ' + itr.next().value);
console.log('toString: ' + primes.toString());
*/
//Q5-a 不能達到故障
/*
const primes_a = new PrimeNumbers();
primes_a.computePrimes(0);
*/
//Q5-b 達到故障但不影響程序狀態(無產生錯誤狀態)
const primes_b = new PrimeNumbers();
primes_b.computePrimes(7);

//Q5-c 產生錯誤狀態但不傳播到輸出
//ANS:不能，一旦錯誤狀態產生，就代表應執行`this.primes.push(number)`但未被執行，即有質數沒被計算到

//Q5-d 錯誤狀態傳播到輸出，但無法揭露失敗
//ANS:不能，一旦錯誤狀態產生，即有質數沒被計算到，因此輸出就會發現少了19...等質數。

//Q5-e 一個測試案例揭露了失敗
//ANS:只要n>=8就會失敗
const primes_e = new PrimeNumbers();
primes_e.computePrimes(10);
console.log('toString: ' + primes_e.toString());
