// chaining promises one after the other using .then can be useful to avoid callback hell problem

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

p1.then((result) => {
  console.log("Callback 1");
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async operation 2...");
      resolve(2);
    }, 2000);
  });
  return p2;
}).then((result) => {
  console.log("Callback 2");
});
// insted of having multiple callbacks we can use this promise chaining method to avoid callback hell problem
