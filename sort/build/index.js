"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    }
}
const sorted = new Sorter([10, 3, -5, 0]);
sorted.sort();
console.log(sorted.collection);
