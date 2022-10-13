// promies is used to achieve parallel programming
// at first the code checks when it sees that there is a promise it moves on to the next block of code and allows that promise to run in the background
let p1 = new Promise((resolve, reject) => {
  console.log("Process P1 started");
  setTimeout(() => {
    console.log("Full Stack Development");
    resolve("DSA");
  }, 5000);
  console.log("Process P1 completed");
});

let p2 = new Promise((resolve, reject) => {
  console.log("Process P2 started");
  setTimeout(() => {
    console.log("Machine Learning");
    reject("Operating System");
  }, 3000);
  console.log("Process P2 completed");
});

p1.then((value) => {
  console.log(value);
}); // this basically gives us the value when the promise is resolved

p2.catch((data) => {
  console.log(data);
}); // this basically gives the value when the promise is rejected, here we catch the error
