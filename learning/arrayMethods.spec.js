const { sumOfTripledEvens, newSumOfTripledEvens, camelize, filterRange, filterRangeInPlace, copySorted, shuffle, unique } = require('./arrayMethods');

const inputArray = [1, 2, 3, 4, 5]
test ('', () => {
    expect(sumOfTripledEvens(inputArray)).toEqual(18)
});

test ('', () => {
    expect(newSumOfTripledEvens(inputArray)).toEqual(18)
});

test('camelize should convert kebab-case to camelCase', () => {
    expect(camelize("background-color")).toEqual('backgroundColor');
});

test('camelize should convert kebab-case to camelCase', () => {
    expect(camelize("list-style-image")).toEqual('listStyleImage');
});

test('camelize should convert kebab-case to camelCase', () => {
    expect(camelize("-webkit-transition")).toEqual('WebkitTransition');
});

test('', () => {
    expect(filterRange([5, 3, 8, 1], 1, 4)).toEqual([3, 1]);
})

// Basic test case
test('filterRangeInPlace should filter array in place', () => {
    const arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([3, 1]);
});

// Test case where last element causes both i and j to change
test('filterRangeInPlace with last element in range', () => {
    const arr = [5, 3, 8, 4];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([3, 4]);
});

// Test case where first element causes both i and j to change
test('filterRangeInPlace with first element in range', () => {
    const arr = [2, 5, 8, 1];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([2, 1]);
});

// Test case with all elements in range
test('filterRangeInPlace with all elements in range', () => {
    const arr = [2, 3, 1, 4];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([2, 3, 1, 4]);
});

// Test case with no elements in range
test('filterRangeInPlace with no elements in range', () => {
    const arr = [5, 6, 7, 8];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([]);
});

// Test case with single element in range at end
test('filterRangeInPlace with single element at end', () => {
    const arr = [5, 6, 7, 3];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([3]);
});

// Test case with single element in range at beginning
test('filterRangeInPlace with single element at beginning', () => {
    const arr = [2, 5, 6, 7];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([2]);
});

// Test case with alternating elements in/out of range
test('filterRangeInPlace with alternating elements', () => {
    const arr = [2, 5, 3, 6, 1];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([2, 3, 1]);
});

// Test case with boundary values
test('filterRangeInPlace with boundary values', () => {
    const arr = [1, 4, 0, 5];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([1, 4]);
});

// Test case with duplicate values
test('filterRangeInPlace with duplicate values', () => {
    const arr = [3, 3, 5, 1, 1];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([3, 3, 1, 1]);
});

// Test case with empty array
test('filterRangeInPlace with empty array', () => {
    const arr = [];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([]);
});

// Test case with single element array
test('filterRangeInPlace with single element array', () => {
    const arr = [3];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([3]);
});

// Test case with single element array out of range
test('filterRangeInPlace with single element array out of range', () => {
    const arr = [5];
    filterRangeInPlace(arr, 1, 4);
    expect(arr).toEqual([]);
});

test('unique returns array of unique values', () => {
    const strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
    expect(unique(strings)).toEqual(["Hare", "Krishna", ":-O"]);
});
