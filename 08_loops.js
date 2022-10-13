// for in loop is used to access the keys of the object and for of loop is used in arrays

let obj = {
  name: "Shishir",
  role: "Full Stack Developer",
  age: 23,
};
// console.log(obj);
for (let a in obj) {
  console.log(a);
  // console.log(obj[a]);
}
let arr = ["hello", 21, "world", 2.4];
for (let a of arr) {
  console.log(a);
}
