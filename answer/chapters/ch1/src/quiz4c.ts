function union(a:Set<any>, b:Set<any>):Set<any>{
    let result = new Set(a || []);
    b?.forEach(function(bItem){
        if(!result.has(bItem)) result.add(bItem);
    })
    return result;
};

console.log('union result:',union(new Set([1,2,3]),new Set([4,5,6])))
console.log('union result:',union(new Set([]),new Set([])))
console.log('union result:',union(new Set([1,1,2,3]),new Set([1,2,3])))
console.log('union result:',union(new Set([1,2,3]),new Set([null,1,2,3])))
//console.log('union result:',union(null,null))