// we can also create our custom error using try and catch

try {
  shishir;
  throw new Error("This is a custom error");
} catch (error) {
  console.log(error);
}
console.log("This is the end of the program");
