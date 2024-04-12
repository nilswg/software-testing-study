import { findLast, lastZero, countPositive, oddOrPos } from '../src/quiz5';

describe('test findLast()', () => {
    it('迴圈能正確執行到 i=0，並返回 0 作為答案', () => {
        const x = [2, 3, 5];
        const y = 2;

        expect(findLast(x, y)).toEqual(0);
    });

    it('未存在時，回傳-1', () => {
        const x: number[] = [];
        const y = 1;

        expect(findLast(x, y)).toEqual(-1);
    });

    it('僅回傳最後一個符合的index', () => {
        const x = [1, 0, 0, 1];
        const y = 1;

        expect(findLast(x, y)).toEqual(3);
    });
});

describe('test lastZero()', () => {
    it('回傳最後一個 0 的index', () => {
        const x = [0, 1, 0];

        expect(lastZero(x)).toEqual(2);
    });

    it('當陣列不存在0時，回傳-1', () => {
        const x: number[] = [];

        expect(lastZero(x)).toEqual(-1);
    });
});

describe('test countPositive()', () => {
    it('正確統計正整數', () => {
        const x = [1, 2, 3];
        expect(countPositive(x)).toEqual(3);
    });

    it('不會統計到 0', () => {
        const x = [0];
        expect(countPositive(x)).toEqual(0);
    });

    it('當陣列中不存在正數時，回傳 0', () => {
        const x = [0, -1];

        expect(countPositive(x)).toEqual(0);
    });
});

describe('test oddOrPos()', () => {
    it('正確統計奇數', () => {
        const x = [-3, -1, 1, 3];
        expect(oddOrPos(x)).toEqual(4);
    });

    it('不會統計到 0', () => {
        const x = [0, -0];
        expect(oddOrPos(x)).toEqual(0);
    });

    it('不會統計到負偶數', () => {
        const x = [-2, -4];
        expect(oddOrPos(x)).toEqual(0);
    });

    it('正確統計正整數', () => {
        const x = [1, 2, 3];
        expect(oddOrPos(x)).toEqual(3);
    });
});
