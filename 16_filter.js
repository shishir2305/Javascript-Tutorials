// method used to filter elements out of an array based on some test

let arr = [1, 2, 3, 4, 5];
let temp = arr.filter((e) => {
  // return e <= 3;
  return e > 2.5;
});
console.log(temp);
