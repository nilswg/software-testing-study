import { PrimeNumbers } from '../src/quiz6';

describe('Test PrimeNumbers class', () => {
    describe('(a) 未觸發錯誤的測試', () => {
        // 沒有進入迴圈，避免觸發錯誤

        it('測試找出 0 個', () => {
            const primes = new PrimeNumbers();
            const result = getPrimesList(primes, 0);
            expect(result).toEqual([]);
        });
    });

    // 進到迴圈，primes
    describe('(b) 觸發錯誤但不影響其他狀態的測試', () => {
        // 執行到錯誤點，但是因為產生的質數數量不足以產生錯誤狀態。
        it('測試找出 5 個', () => {
            const primes = new PrimeNumbers();
            const result = getPrimesList(primes, 5);
            expect(result).toEqual([2, 3, 5, 7, 11]);
        });
    });

    describe('(c) 造成錯誤狀態但沒有傳播', () => {
        // 不能，無法避免傳播。
        // 如輸入 primes.computePrimes(10), 會跳過 19、29 
        // 造成錯誤狀態。且該錯誤狀態會立即被保存下來，必定傳播。 
        // it('❌ 無法避免傳播', () => { })
    });

    describe('(d) 傳播錯誤狀態但沒有發現錯誤', () => {
        it('輸出的質數中有包含錯誤狀態，但是不一定能發現錯誤', () => {
            const primes = new PrimeNumbers();
            const result = getPrimesList(primes, 10);

            // result.slice(5, 9) : [13, 17, 23, 31]
            // 其中，31 不正確，但是沒有被檢查出來
            const wrong = result.slice(5, 9);
            expect(wrong[0]).toEqual(13);
            expect(wrong[1]).toEqual(17);
        });
    });

    describe('(e) 揭示錯誤的測試', () => {
        it('只要提取的質數數量超過 8 就會影發錯誤', () => {
            const primes = new PrimeNumbers();
            const result = getPrimesList(primes, 8);
            expect(result.length).toEqual(8);
            expect(result).not.toContain(19);
        });
    });
});

function getPrimesList(primes: PrimeNumbers, n: number): number[] {
    primes.computePrimes(n);
    let res: number[] = [];
    for (const prime of primes) {
        res.push(prime);
    }
    return res;
}