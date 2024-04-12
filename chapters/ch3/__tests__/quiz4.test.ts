import { Min } from '../src/quiz4';

describe('test class min', () => {
    it('檢驗輸入 list 長度為 0 時，是否能引發錯誤', () => {
        expect(() => Min.min([])).toThrow(TypeError);
    });

    it('檢驗輸入 [null] 應拋出錯誤', () => {
        expect(() => Min.min([null])).toThrow(TypeError);
    })
});

describe('test for solo null element', () => {
    it('檢驗輸入 [null] 應拋出錯誤', () => {
        const disableNullCheck = true;
        expect(Min.min([null], disableNullCheck)).toThrow(TypeError);
    })
})