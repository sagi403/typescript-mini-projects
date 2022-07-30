"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const sorted = new Sorter_1.Sorter([10, 3, -5, 0]);
sorted.sort();
console.log(sorted.collection);
