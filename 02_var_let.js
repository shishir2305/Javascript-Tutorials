// we can change var anywhere and it will impact the global variable but changing let will not impact the global variable

var name = "Shishir";
let dob = 23;
function display() {
  var name = "Jha";
  let dob = 37;
  console.log(name);
  console.log(dob);
}
display();
console.log(name);
console.log(dob);
var role;
let test;
// const temp; it has to be initialized
console.log(role);
console.log(test);
