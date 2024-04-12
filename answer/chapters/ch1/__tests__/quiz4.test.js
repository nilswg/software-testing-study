const {union,union_set} = require('../src/quiz4')

describe("ch1-4-c: union", () => {
    it("測試當輸入a有重複時,結果仍然為聯集且唯一的陣列", () => {
        const test_a = [1,1,2,3], test_b = [1,2,3,4,5], expectedResults = [1,2,3,4,5];
        const result = union(test_a,test_b);
        expect(result.length).toBe(expectedResults.length);
        expectedResults.forEach(function(expectedResult){
            expect(result.includes(expectedResult)).toBe(true);
        })
    });
    it("測試當輸入b有重複時,結果仍然為聯集且唯一的陣列", () => {
        const test_b = [1,1,2,3], test_a = [1,2,3,4,5], expectedResults = [1,2,3,4,5];
        const result = union(test_a,test_b);
        expect(result.length).toBe(expectedResults.length);
        expectedResults.forEach(function(expectedResult){
            expect(result.includes(expectedResult)).toBe(true);
        })
    });
    it("測試當傳入null時,不能引發exception", () => {
        const test_a = null, test_b = [1,2,3,4,5];
        expect(function(){
           union(test_a,test_b);
        }).not.toThrow()
    });
    it("測試當傳入null時,視為空陣列", () => {
        const test_a = null, test_b = [1,2,3,4,5], expectedResults = [1,2,3,4,5];
        const result = union(test_a,test_b);
        expect(result.length).toBe(expectedResults.length);
        expectedResults.forEach(function(expectedResult){
            expect(result.includes(expectedResult)).toBe(true);
        })
    });
});

describe("ch1-4-d: union_set", () => {
    it("測試結果為聯集Set", () => {
        const test_a = new Set([1,2,3]), test_b = new Set([1,2,3,4,5]), expectedResults = [1,2,3,4,5];
        const result = union_set(test_a,test_b);
        expect(result.size).toBe(expectedResults.length);
        expectedResults.forEach(function(expectedResult){
            expect(result.has(expectedResult)).toBe(true);
        })
    });
    it("測試當傳入null時,不能引發exception", () => {
        const test_a = null, test_b = new Set([1,2,3,4,5]);
        expect(function(){
            union_set(test_a,test_b);
        }).not.toThrow()
    });
    it("測試當傳入null時,視為空Set", () => {
        const test_a = null, test_b = new Set([1,2,3,4,5]), expectedResults = [1,2,3,4,5];
        const result = union_set(test_a,test_b);
        expect(result.size).toBe(expectedResults.length);
        expectedResults.forEach(function(expectedResult){
            expect(result.has(expectedResult)).toBe(true);
        })
    });
});

