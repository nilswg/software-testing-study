// @file: ch1/__test__/quiz1.test.ts

import { ambiguous_union } from '../src/quiz4_a';
import { union } from '../src/quiz4_d';

// 題目 a 
describe('test ambiguous union function', () => {
    it(' a 為空集合時，應能返回 b', () => {
        expect(ambiguous_union([], [1])).toHaveLength(1);
    });
    it(' b 為空集合時，應能返回 a', () => {
        expect(ambiguous_union([1], [])).toHaveLength(1);
    });
});

// 題目 d
describe('test modified union function', () => {
    it(' a 為空集合時，應能返回 b', () => {
        expect(union([], [1])).toHaveLength(1);
    });
    it(' b 為空集合時，應能返回 a', () => {
        expect(union([1], [])).toHaveLength(1);
    });
    it(' a 與 b 可同時為空集合', () => {
        expect(union([], [])).toHaveLength(0);
    });
    it('取聯集 a, b 時，應能去除重複 2', () => {
        expect(union([1, 2, 3], [2, 4])).toEqual([1, 2, 3, 4]);
    });
    it('a, b 集合中有重複值，應能去除重複', () => {
        expect(union([1, 2, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
});
