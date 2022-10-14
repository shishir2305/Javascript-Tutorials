// finally block executes irrespective of the error presence or not

try {
  shishir;
} catch (error) {
  console.log(error);
} finally {
  console.log("This is the finally block");
  console.log("This is the end of the program");
}
// we have to case to use finally i.e.
// lets assume we have an error in the try block then the catch block will execute, but what if we also have an error in the catch block then the program execution will stop. So, to avoid this we use finally.
// if there an error or not finally never cares about this and will execute
// one more important case is when we have the try catch block inside a function, here if there are not errors in the try block and we have a return keyword at the end of the try block then also the finally block will run. In simple words it will run, no matter what
// if there is a return in try, finally is executed just before the control returns to the outer code
