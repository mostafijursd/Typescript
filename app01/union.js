"use strict";
function combine(a, b) {
    if (typeof a === 'number' && b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine(10, 20));
console.log(combine('babu', 'sk'));
