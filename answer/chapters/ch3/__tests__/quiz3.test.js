const { BoundedQueue } = require('../src/quiz3');

describe('BoundedQueue', () => {
    it('test for new BoundedQueue when pass 0', () => {
        const run = () => {
            new BoundedQueue(0);
        };
        expect(run).not.toThrow(Error);
    });

    it.each([1, 2, 3])('test for new BoundedQueue when pass positive numbers %i', (capacity) => {
        const run = () => {
            new BoundedQueue(capacity);
        };
        expect(run).not.toThrow(Error);
    });

    it('test for new BoundedQueue when pass -1', () => {
        const run = () => {
            new BoundedQueue(-1);
        };
        expect(run).toThrow(Error);
    });

    it('test for new BoundedQueue.enQueue when pass null', () => {
        const queue = new BoundedQueue(1);
        const run = () => {
            queue.enQueue(null);
        };
        expect(run).toThrow(Error);
    });

    it('test for new BoundedQueue.enQueue pass object when queue is full', () => {
        const queue = new BoundedQueue(1);
        queue.enQueue({});

        const run = () => {
            queue.enQueue({});
        };
        expect(run).toThrow(Error);
    });

    it('test for new BoundedQueue.enQueue pass object when queue is not full', () => {
        const queue = new BoundedQueue(1);

        const run = () => {
            queue.enQueue({});
        };
        expect(run).not.toThrow(Error);
    });

    it('test for new BoundedQueue.deQueue when queue is empty', () => {
        const queue = new BoundedQueue(1);

        const run = () => {
            queue.deQueue();
        };
        expect(run).toThrow(Error);
    });

    it('test for new BoundedQueue.deQueue when queue is not empty', () => {
        const queue = new BoundedQueue(1);
        queue.enQueue({});

        const run = () => {
            queue.deQueue();
        };
        expect(run).not.toThrow(Error);
    });

    it('test for isFull when queue is empty', () => {
        const queue = new BoundedQueue(3);
        expect(queue.isFull()).toEqual(false);
    });

    it('test for isFull when queue is not empty or full', () => {
        const queue = new BoundedQueue(3);
        queue.enQueue({});
        expect(queue.isFull()).toEqual(false);
    });

    it('test for isFull when queue is full', () => {
        const queue = new BoundedQueue(3);
        queue.enQueue({});
        queue.enQueue({});
        queue.enQueue({});
        expect(queue.isFull()).toEqual(true);
    });

    it('test for isEmpty when queue is empty', () => {
        const queue = new BoundedQueue(3);
        expect(queue.isEmpty()).toEqual(true);
    });

    it('test for isEmpty when queue is not empty or full', () => {
        const queue = new BoundedQueue(3);
        queue.enQueue({});
        expect(queue.isEmpty()).toEqual(false);
    });

    it('test for isEmpty when queue is full', () => {
        const queue = new BoundedQueue(3);
        queue.enQueue({});
        queue.enQueue({});
        queue.enQueue({});
        expect(queue.isEmpty()).toEqual(false);
    });

    it('test for toString when queue is empty', () => {
        const queue = new BoundedQueue(3);
        expect(queue.toString()).toEqual('[]');
    });
    it('test for toString when queue is not empty', () => {
        const data = ['A', 'B', 'C'];
        const queue = new BoundedQueue(data.length);
        data.forEach((laabel) => queue.enQueue(laabel));
        expect(queue.toString()).toEqual(`[${data.join(', ')}]`);
    });
});

class TestObj {
    label;
    constructor(label) {
        this.label = label;
    }

    toString() {
        return this.label;
    }
}
