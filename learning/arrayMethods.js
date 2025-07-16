function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

function newSumOfTripledEvens(array) {
  return array
    .filter((item) => item % 2 === 0)
    .map((item) => item * 3)
    .reduce((acc, cur) => acc += cur);
}

function camelize(str) {
  return str
    .split('-')
    .map((string, index) => {
      return index === 0 ? string : string[0].toUpperCase() + string.slice(1);
    })
    .join('');
}

function filterRange(arr, a, b) {
  return arr.filter(item => a <= item && item <= b);
}

function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < a || b < arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function copySorted(arr) {
  return arr.slice().sort();
}

function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
    j = Math.round(Math.random() * (array.length - 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// function unique(arr) {
//   const dic = {}
//   arr.forEach(element => {
//     dic[element] = element;
//   });
//   return Object.values(dic);
// }

function unique(arr) {
  return Array(...new Set(arr));
}

module.exports = { sumOfTripledEvens, newSumOfTripledEvens, camelize, filterRange, filterRangeInPlace, copySorted, shuffle, unique };

