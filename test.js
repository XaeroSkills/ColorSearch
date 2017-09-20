"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HSVHistogram_1 = require("./server/core/image-descriptor/histogram/hsv/HSVHistogram");
const hist = HSVHistogram_1.default.getTrapezoidFuzzyHistogram();
const col1 = { h: 20, s: 5, v: 70 };
hist.addColor(col1);
hist.done();
let sum = 0;
const h = hist.toArray();
console.log("size: " + h.length);
// tslint:disable-next-line:prefer-for-of
for (let i = 0; i < h.length; i++) {
    console.log(h[i]);
    sum += h[i];
}
console.log("sum: " + sum);
