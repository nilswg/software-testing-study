/**
 * CH1-4-a
 * @param {Array<any>} a 
 * @param {Array<any>} b 
 */
function union(a, b){
    let result = a.slice();
    b.forEach(function(bItem){
        if(!result.includes(bItem)) result.push(bItem);
    })
    return result;
};


console.log('union result:',union([1,2,3],[4,5,6]))
console.log('union result:',union([],[]))
console.log('union result:',union([1,1,2,3],[1,2,3])) //a有重複就會有不預期的失敗
console.log('union result:',union([1,2,3],[null,1,2,3]))
//console.log('union result:',union(null,null)) //會直接exception

/**
 * CH1-4-b
 * 1.a有重複就會有不預期的失敗 2.傳入null/undefined會exception
 */

/**
 * CH1-4-a
 * @param {Set<any>} a 
 * @param {Set<any>} b 
 */
function union_set(a, b){
    let result = new Set(a || []);
    b?.forEach(function(bItem){
        if(!result.has(bItem)) result.add(bItem);
    })
    return result;
};

console.log('union_set result:',union_set([1,2,3],[4,5,6]))
console.log('union_set result:',union_set([],[]))
console.log('union_set result:',union_set([1,1,2,3],[1,2,3])) //a有重複就會有不預期的失敗
console.log('union_set result:',union_set([1,2,3],[null,1,2,3]))
console.log('union_set result:',union_set(null,null)) //會直接exception

module.exports = {union,union_set}