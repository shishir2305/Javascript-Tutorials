// used to reduce the array to a single value

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
delete arr[2];
// console.log(arr);
let temp = arr.reduce((e1, e2) => {
  return e1 + e2;
});
console.log(temp);
console.log(typeof temp);
