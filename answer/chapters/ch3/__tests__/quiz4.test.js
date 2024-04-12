const { Min } = require('../src/quiz4');

describe('Min', () => {
    it('testForSoloNullElement', () => {
        const run = () => {
            const list = [null];
            Min.min(list);
        };
        expect(run).toThrow(Error);
    });
});
