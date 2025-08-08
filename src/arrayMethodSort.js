'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const array = this;

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        const swap = compareFunction
          ? compareFunction(array[j], array[j + 1]) > 0
          : String(array[j]) > String(array[j + 1]);

        if (swap) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
