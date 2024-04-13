// binary search
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

let arr = ["a", "b", "c", "d", "e"];

let target = "d";
let index = binarySearch(arr, target);
console.log(index);

// linear search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
let array = [1, 2, 3, 4, 5, 6];
console.log(linearSearch([1, 2, 3, 45, 43, 99], 3));
