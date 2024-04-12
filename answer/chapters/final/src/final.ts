export type TreeNode = { title: string; children?: undefined | TreeNode[] };
export const data: TreeNode = {
    title: 'topNode',
    children: [
        {
            title: 'node1',
            children: [
                {
                    title: 'randomNode_1',
                },
                {
                    title: 'node2',
                    children: [
                        {
                            title: 'randomNode_2',
                            children: [
                                {
                                    title: 'node2',
                                    children: [
                                        {
                                            title: 'randomNode_3',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export function searchTree(element: TreeNode, matchingTitle: string): TreeNode | null {
    if (element.title === matchingTitle) {
        //強型態比對
        return element;
    } else if (element.children != null) {
        var i;
        var result: TreeNode | null = null;
        for (i = 0; result == null && i < element.children.length; i++) {
            result = searchTree(element.children[i], matchingTitle);
        }
        return result;
    }
    return null;
}
