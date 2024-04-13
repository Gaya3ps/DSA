// insert an element in an array
function insert(arr) {
  arr.push(5);
  return arr;
}
let arr1 = [1, 2, 4, 6, 3];
let result = insert(arr1);
console.log("the new array is:", result);

// flattern 2d array to 1d array
function flattenArray(twodArray) {
  let newarr = [];
  for (let i = 0; i < twodArray.length; i++) {
    for (let j = 0; j < twodArray[i].length; j++) {
      newarr.push(twodArray[i][j]);
    }
  }
  return newarr;
}
const twodArray = [[1, 2, 3, 4], [5.6], [7, 8, 9]];
const newarr = flattenArray(twodArray);
console.log(newarr);

//show the  first elements that gives the specified result of a sum
function sum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
var target = 8;
const elements = sum(arr, target);
console.log(elements);
  
// to rearrange the target element to the end of array
function order(array, target) {
  for (let i = 0; i < array.length; i++) {
    let temp = 0;
    if (array[i] === target) {
      for (let j = i + 1; j < array.length; j++) {
        temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}
let arrayset = [1, 4, 2, 4, 8, 6, 4, 9, 7, 4];
let target = 4;
let newarray = order(arrayset, target);
console.log(newarray);

//to remove duplicates
function duplicates(array) {
  let uniquearray = [];
  for (let i = 0; i < array.length; i++) {
    let isduplicate = false;
    for (let j = 0; j < uniquearray.length; j++) {
      if (array[i] === uniquearray[j]) {
        isduplicate = true;
        break;
      }
    }
    if (!isduplicate) {
      uniquearray.push(array[i]);
    }
  }
  return uniquearray;
}
let arrayset1 = [1, 1, 2, 4, 8, 6, 4, 9, 7, 4];
let newarray1 = duplicates(arrayset1);
console.log(newarray1);

// reverse an array
let a = [1, 1, 2, 4, 8, 6, 4, 9, 7, 4];
b = [];
for (let i = a.length - 1; i >= 0; i--) {
  b.push(a[i]);
}
console.log(b);

// function reverse(a){
//     b=[] ;
//     for(let i=a.length-1;i>=0;i--){
//         b.push(a[i]);
//       }
//       return b;
// }

// let a = [1,1,2,4,8,6,4,9,7,4]
// const x=reverse(a);
// console.log(x);

// function reverse(arr){
//     let temp;
// for(i=0;i<(arr.length/2);i++){
//     temp = arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// return arr
// }

// let arr = [1,2,3,4,5,6]
// const x = reverse(arr);
// console.log(x);
