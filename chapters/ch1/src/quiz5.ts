export const findLast = (x: number[], y: number) => {
    for (let i = x.length - 1; i > -1; i--) {
        if (x[i] == y) {
            return i
        }
    }
    return -1;
};

export const lastZero = (x: number[]) => {
    for (let i = x.length; i > -1; i--) {
        if (x[i] == 0) {
            return i
        }
    }
    return -1;
};

export const countPositive = (x: number[]) => {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] > 0) count++;
    }
    return count;
};

export const oddOrPos = (x: number[]) => {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (Math.abs(x[i] % 2) == 1 || x[i] > 0) count++;
    }
    return count;
};
