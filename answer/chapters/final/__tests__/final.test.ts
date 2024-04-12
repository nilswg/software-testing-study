import { searchTree, TreeNode } from '../src/final';

describe('final test set', () => {
    it('element 輸入 null / undefinded 時,函數會產生exception', () => {
        const element: TreeNode = null;
        expect(() => {
            searchTree(element, '');
        }).toThrow();
    });
    const cantMatchedCases: Array<Parameters<typeof searchTree>> = [
        //輸入空間劃分BCC [A2,B3,C1]
        [{ title: 'text2', children: [{ title: 'text3', children: [] }] }, 'text1'],
        //圖覆蓋PPC & ADUPC 1,4,5,8,MCMCUT f(a,b,c,d):{ FTTF }
        [{ title: 'text2', children: [] }, 'text1'],
        //圖覆蓋PPC & ADUPC 1,2 & MUMCUT f(a,b,c,d):{ FF?? }
        [{ title: 'text2', children: null }, 'text1'],
    ];
    it.each(cantMatchedCases)('找不到節點會回傳null', (element, matchingTitle) => {
        const result = searchTree(element, matchingTitle);
        expect(result).toBeNull();
    });
    const canMatchedCases: Array<Parameters<typeof searchTree>> = [
        //輸入空間劃分BCC 基本選擇 [A2,B3,C2]
        [{ title: 'text1', children: [{ title: 'text2', children: [] }] }, 'text1'],
        //輸入空間劃分BCC [A1,B3,C2]
        [{ title: '', children: [{ title: 'text2', children: [] }] }, ''],
        //輸入空間劃分BCC [A2,B1,C2] & MUMCUT f(a,b,c,d):{ T??? }
        [{ title: 'text1', children: null }, 'text1'],
        //輸入空間劃分BCC [A2,B2,C2]
        [{ title: 'text1', children: [] }, 'text1'],
        //輸入空間劃分BCC [A2,B3,C3] & 圖覆蓋PPC & ADUPC 1,4,5,6,7,5,6,7,5,8
        [
            {
                title: 'text2',
                children: [
                    { title: 'text3', children: [] },
                    { title: 'text1', children: [] },
                ],
            },
            'text1',
        ],
        //圖覆蓋PPC & ADUPC 1,3
        [{ title: 'text1', children: [] }, 'text1'],
        //MCMCUT f(a,b,c,d):{ FTTT }
        [{ title: 'text2', children: [{ title: 'text1', children: [] }] }, 'text1'],
        //MCMCUT f(a,b,c,d):{ FTFT }
        [
            {
                title: 'text2',
                children: [
                    { title: 'text1', children: [] },
                    { title: 'text3', children: [] },
                ],
            },
            'text1',
        ],
    ];
    it.each(canMatchedCases)('找到節點會回傳該節點,並且其中的title與matchingTitle相同', (element, matchingTitle) => {
        const result = searchTree(element, matchingTitle);
        expect(result).not.toBeNull();
        expect(result.title).toEqual(matchingTitle);
    });
});
