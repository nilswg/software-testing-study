import { BoundedQueue } from '../src/quiz3';

describe('Test BoundedQueue class', () => {

    // 依照 0,正整數,負整數來輸入空間劃分
    it('BoundedQueue 實例化時輸入0，應拋出錯誤', () => {
        const run_zero = () => {
            new BoundedQueue(0);
        };
        expect(run_zero).toThrow(RangeError);
    })

    it('BoundedQueue 實例化時輸入負整數，應拋出錯誤', () => {
        const run_negative = () => {
            new BoundedQueue(-1);
        };
        expect(run_negative).toThrow(RangeError);
    })

    it('BoundedQueue 實例化時輸入正整數，應沒有錯誤', () => {
        const run_positive = () => {
            new BoundedQueue(1);
        };
        expect(run_positive).not.toThrow(RangeError);;
    })

    it('塞入元素，超出範疇，應返回錯誤', () => {
        const queue = new BoundedQueue(1);
        queue.enqueue(1);
        const run = () => {
            queue.enqueue(1);
        }
        expect(run).toThrow(RangeError);
    });

    it('移出元素至數量為0，應返回 null', () => {
        const queue = new BoundedQueue(1);
        expect(queue.dequeue()).toEqual(null);
    });

    it('測試 peek 行為，能否查看 queue 中第一個元素', () => {
        const peekValue = 10;
        const tests = [peekValue, -1, -1, -1];
        const queue = new BoundedQueue(10)
        tests.forEach((x) => queue.enqueue(x))
        expect(queue.peek()).toEqual(peekValue)
    });

    it('測試 peek 行為，queue 沒有任何元素，peek 返回 null', () => {
        const queue = new BoundedQueue(1)
        expect(queue.peek()).toEqual(null)
    });

    it('使用 size 能獲取元素正確數量', () => {
        const queue = new BoundedQueue(10)
        const tests = [1, 1, -1, 1, -1]
        const expectSize = tests.reduce((prev, cur) => prev + cur, 0)
        tests.forEach((x) => (x === 1) ? queue.enqueue(1) : queue.dequeue())
        expect(queue.size()).toEqual(expectSize);
    });

    describe('test isEmpty', () => {

        it('任意時刻 queue 為空時，返回 true', () => {
            const queue = new BoundedQueue(5)
            expect(queue.isEmpty()).toEqual(true)
        })

        it('任意時刻 queue 為非空時，返回 false', () => {
            const queue = new BoundedQueue(5)
            queue.enqueue(1)
            expect(queue.isEmpty()).toEqual(false)
        })
    });

    describe('test isFull', () => {

        it('任意時刻 queue 達到空間上限，返回 true', () => {
            const capacity = 4;
            const queue = new BoundedQueue(capacity);

            for (let i = 0; i < capacity; i++) {
                queue.enqueue(1)
            }
            expect(queue.isFull()).toEqual(true);
        })
    });
});
