// using custom comparator in js

let cmp = (a, b) => {
  return a > b ? -1 : 1;
};
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.sort(cmp);
console.log(arr);
