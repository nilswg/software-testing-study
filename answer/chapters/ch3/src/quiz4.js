// Introduction to Software Testing
// Authors: Paul Ammann & Jeff Offutt
// Chapter 3; page ??
// See MinTest.java for JUnit tests.
// See DataDrivenMinTest.java for JUnit tests. (Instructor only)

class Min {
    /**
     * Returns the mininum element in a list
     * @param {Array<any>} list
     * @return the minimum element in the list
     * @throws NullPointerException if list is null or
     *         if any list elements are null
     * @throws ClassCastException if list elements are not mutually comparable
     * @throws IllegalArgumentException if list is empty
     */
    static min(list) {
        if (list.length == 0) {
            throw new Error('Min.min');
        }

        let itr = list[Symbol.iterator]();
        let result = itr.next().value;
        let comp;

        //if (result == null) throw new NullPointerException('Min.min');
        while (!(comp = itr.next()).done) {
            if (comp.value - result < 0) {
                result = comp.value;
            }
        }
        return result;
    }
}

//console.log(Min.min([1, 1, 5, 3, 7, 2, 4, 2, 1]));
//console.log(Min.min([null]));
module.exports = { Min };
