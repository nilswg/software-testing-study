/**
 * quiz 5-1
 * @param {number[]} x 
 * @param {number} y 
 */
function findLast(x,y){
    for(let i = x.length-1;i > 0;i--){
        if(x[i] == y)
            return i
    }
    return -1;
}

const q51_x = [2,3,5], q51_y = 2;
console.log('quiz 5-1 input:', q51_x, q51_y, 'output:',findLast(q51_x,q51_y));

/**
 * quiz 5-1 fixed
 * @param {number[]} x 
 * @param {number} y 
 */
function findLast_fixed(x,y){
    for(let i = x.length-1;i > -1;i--){
        if(x[i] == y)
            return i
    }
    return -1;
}

console.log('quiz 5-1 fixed input:', q51_x, q51_y, 'output:',findLast_fixed(q51_x,q51_y));

// ===========================================================

/**
 * quiz 5-2
 * @param {number[]} x 
 */
function lastZero(x){
    for(let i = 0;i < x.length;i++){
        if(x[i] == 0){
            return i
        }
    }
    return -1
}

const q52_x = [0,1,0];
console.log('quiz 5-2 input:', q52_x, 'output:',lastZero(q52_x));

/**
 * quiz 5-2 fixed
 * @param {number[]} x 
 */
function lastZero_fixed(x){
    for(let i = x.length;i > -1;i--){
        if(x[i] == 0){
            return i
        }
    }
    return -1
}

console.log('quiz 5-2 fixed input:', q52_x, 'output:',lastZero_fixed(q52_x));

// ======================================================================

/**
 * quiz 5-3
 * @param {number[]} x 
 */
function countPositive(x){
    let count = 0;
    for(let i = 0;i < x.length;i++){
        if(x[i] >= 0) count++;
    }
    return count;
}

const q53_x = [-4,2,0,2];
console.log('quiz 5-3 input:', q53_x, 'output:',countPositive(q53_x));

/**
 * quiz 5-3 fixed
 * @param {number[]} x 
 */
function countPositive_fixed(x){
    let count = 0;
    for(let i = 0;i < x.length;i++){
        if(x[i] > 0) count++;
    }
    return count;
}

console.log('quiz 5-3 fixed input:', q53_x, 'output:',countPositive_fixed(q53_x));

// ======================================================================

/**
 * quiz 5-4
 * @param {number[]} x 
 */
function oddOrPos(x){
    let count = 0;
    for(let i = 0;i < x.length;i++){
        if(x[i] % 2 == 1 || x[i] > 0) count++;
    }
    return count;
}

const q54_x = [-3,-2,0,1,4];
console.log('quiz 5-4 input:', q54_x, 'output:',oddOrPos(q54_x));

/**
 * quiz 5-4 fixed
 * @param {number[]} x 
 */
function oddOrPos_fixed(x){
    let count = 0;
    for(let i = 0;i < x.length;i++){
        if(Math.abs(x[i] % 2) == 1 || x[i] > 0) count++;
    }
    return count;
}

console.log('quiz 5-4 fixed input:', q54_x, 'output:',oddOrPos_fixed(q54_x));