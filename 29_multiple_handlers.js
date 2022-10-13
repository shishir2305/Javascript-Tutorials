// we can multiple promise handlers for a single promise

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Running First Promise");
    resolve("Full Stack Developer");
  }, 3000);
});

p1.then((result) => {
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let val = "Shishir Jha will be a " + result;
      console.log("Running Second Promise");
      resolve(val);
    }, 3000);
  });
  return p2;
}).then((result) => {
  console.log(result);
});

p1.then((result) => {
  console.log("This is the second handler");
});
// chaining of promises and multiple handlers are different things. Since, we are returning a promise from the first handler, the second handler will be called only after the first promise is resolved. If we don't return a promise from the first handler, the second handler will be called immediately after the first handler is called.
