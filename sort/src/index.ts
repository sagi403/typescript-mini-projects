class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Only going to works if collection is number[]
        // If collection is an array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        // Only going to works if collection is a string
        // If collection is a string, do this logic instead
        if (typeof this.collection === "string") {
        }
      }
    }
  }
}

const sorted = new Sorter([10, 3, -5, 0]);
sorted.sort();
console.log(sorted.collection);
