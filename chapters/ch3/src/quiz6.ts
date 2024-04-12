// 考慮以下示例類。PrimeNumbers 有三種方法。第一種 computePrimes() 
// 接受一個整數輸入，並計算該數量的質數。iterator() 返回一個迭代器，它將
// 遍歷質數，而 toString() 返回一個字符串表示。

export class PrimeNumbers implements Iterable<number> {
    private primes: number[] = [];

    public computePrimes(n: number): void {
        let count = 1; // count of primes
        let num = 2; // number tested for primeness
        let isPrime: boolean; // is this number a prime

        while (count <= n) {
            isPrime = true;

            for (let divisor = 2; divisor <= num / 2; divisor++) {
                if (num % divisor === 0) {
                    isPrime = false;
                    break; // for loop
                }
            }

            if (isPrime && num % 10 !== 9) {
                // FAULT: 個位數為9的質數會被忽略。
                this.primes.push(num);
                count++;
            }

            num++;
        }
    }

    [Symbol.iterator](): Iterator<number> {
        return this.primes[Symbol.iterator]();
    }

    toString(): string {
        return this.primes.toString();
    }
}
