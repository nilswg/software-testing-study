export class BoundedQueue<T> {
    private queue: T[];
    private capacity: number;

    constructor(capacity: number) {
        if (capacity <= 0) {
            throw new RangeError('Capacity must be a positive integer.');
        }
        this.capacity = capacity;
        this.queue = [];
    }

    enqueue(item: T): void {
        if (item == null) {
            throw new TypeError('Item cannot be null.')
        }
        if (this.isFull()) {
            throw new RangeError('Queue is full.');
        }
        this.queue.push(item);
    }

    dequeue(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift()!;
    }

    peek(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0];
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    isFull(): boolean {
        return this.queue.length === this.capacity;
    }

    size(): number {
        return this.queue.length;
    }
}