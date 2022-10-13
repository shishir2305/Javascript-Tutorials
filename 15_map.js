// map method is a higher order array method used to create a new array with specified operations performed on the original array

let arr = [1, 2, 3, 4, 5];
let newArray = arr.map((e) => {
  return e * e;
});
console.log(newArray);
