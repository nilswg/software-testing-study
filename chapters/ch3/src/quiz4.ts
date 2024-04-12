// Introduction to Software Testing
// Authors: Paul Ammann & Jeff Offutt
// Chapter 3; page ??
// See MinTest.java for JUnit tests.
// See DataDrivenMinTest.java for JUnit tests. (Instructor only)

export class Min {
    /**
     * Returns the mininum element in a list
     * @param list Comparable list of elements to search
     * @return the minimum element in the list
     * @throws NullPointerException if list is null or
     *         if any list elements are null
     * @throws ClassCastException if list elements are not mutually comparable
     * @throws IllegalArgumentException if list is empty
     */
    static min<T>(list: T[], disableNullCheck: boolean = false): T {
        if (list.length == 0) {
            throw new TypeError('IllegalArgumentException');
        }

        const itr: IterableIterator<T> = list.values();
        let result: T = itr.next().value

        // 檢驗首位元素是否有效，根據題目設計 disableNullCheck 移除此項檢驗
        if (!disableNullCheck) {
            if (result === undefined || result === null) {
                throw new TypeError('NullPointerException');
            }
        }

        for (const comp of itr) {
            if (comp < result) {
                result = comp;
            }
        }
        return result;
    }
}