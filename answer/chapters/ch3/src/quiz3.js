// Introduction to Software Testing
// Authors: Paul Ammann & Jeff Offutt
// Chapter 3, page ??
// See BoundedQueueTest.java for JUnit tests. (Instructor only)

class BoundedQueue {
    // Overview:  a BoundedQueue is a mutable, bounded FIFO data structure
    // of fixed this.size , with this.size being set in the constructor
    // A typical Queue is [], [o1], or [o1, o2], where neither o1 nor o2
    // are ever null.  Older this.elements are listed before newer ones.

    elements;
    size;
    front;
    back;
    capacity;

    constructor(capacity) {
        if (capacity < 0) throw new Error('BoundedQueue.constructor IllegalArgumentException');
        this.capacity = capacity;
        this.elements = new Array(capacity);
        this.size = 0;
        this.front = 0;
        this.back = 0;
    }

    enQueue(o) {
        // Modifies: this
        // Effects:   If argument is null throw NullPointerException
        // else if this is full, throw IllegalStateException,
        // else make o the newest element of this
        if (o == null) throw new Error('BoundedQueue.enQueue NullPointerException');
        else if (this.size == this.capacity) throw new Error('BoundedQueue.enQueue IllegalStateException');
        else {
            this.size++;
            this.elements[this.back] = o;
            this.back = (this.back + 1) % this.capacity;
        }
    }

    deQueue() {
        // Modifies: this
        // Effects:   If queue is empty, throw IllegalStateException,
        // else remove and return oldest element of this

        if (this.size == 0) throw new Error('BoundedQueue.deQueue IllegalStateException');
        else {
            this.size--;
            const o = this.elements[this.front % this.capacity];
            this.elements[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            return o;
        }
    }

    isEmpty() {
        return this.size == 0;
    }
    isFull() {
        return this.size == this.capacity;
    }

    toString() {
        let result = '[';
        for (let i = 0; i < this.size; i++) {
            result += this.elements[(this.front + i) % this.capacity].toString();
            if (i < this.size - 1) {
                result += ', ';
            }
        }
        result += ']';
        return result;
    }
}

/*
class TestObj {
  label;
  constructor(label) {
    this.label = label;
  }

  toString() {
    return this.label;
  }
}

const testQ1 = new BoundedQueue(3);
testQ1.enQueue(new TestObj("A"));
console.log(
  `testQ1.toString():${testQ1.toString()}/isEmpty():${testQ1.isEmpty()}/isFull():${testQ1.isFull()}`
);

testQ1.enQueue(new TestObj("B"));
testQ1.enQueue(new TestObj("C"));
console.log(
  `testQ1.toString():${testQ1.toString()}/isEmpty():${testQ1.isEmpty()}/isFull():${testQ1.isFull()}`
);

testQ1.enQueue(new TestObj("D"));
*/
module.exports = {BoundedQueue}