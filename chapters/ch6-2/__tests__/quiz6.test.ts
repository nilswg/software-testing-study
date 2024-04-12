import { BoundedQueue } from "../src/quiz6"

describe('test BoundedQueue class', () => {
    it('正常執行，不會拋出錯誤', () => {

        const capacity = 2;
        const x = {};

        const run = () => {
            const bq = new BoundedQueue(capacity)
            bq.enqueue(x)
        }

        expect(run).not.toThrowError()
    })

    it('enqueue時，不可使用空值作為元素', () => {
        const capacity = 2;
        const x = null;

        const run = () => {
            const bq = new BoundedQueue(capacity)
            bq.enqueue(x)
        }

        expect(run).toThrow(TypeError) // 型態錯誤
    })

    it('初始化時，capacity 不可為負數', () => {
        const capacity = -1;
        const x = {};

        const run = () => {
            const bq = new BoundedQueue(capacity)
            bq.enqueue(x)
        }

        expect(run).toThrow(RangeError) // 範疇錯誤
    })

    it('初始化時，capacity 不可為 0', () => {
        const capacity = 0;
        const x = {};

        const run = () => {
            const bq = new BoundedQueue(capacity)
            bq.enqueue(x)
        }

        expect(run).toThrow(RangeError) // 範疇錯誤
    })

    it('初始化時，capacity 必須是數值', () => {
        const capacity = null as any;
        const x = {};

        const run = () => {
            const bq = new BoundedQueue(capacity)
            bq.enqueue(x)
        }

        expect(run).toThrow(RangeError) // 範疇錯誤
    })
})