// string methods

let name = "Shishir";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase()); // converts all the letter to lowercase
console.log(name.slice(2, 4)); // slices the selected part of the string and end is exclusive

let friend = "Shivangi";
console.log(friend.replace("Shiv", "Kanak")); // to replace something in a string

let role = "      masti     ";
console.log(role.trim()); // eliminates all the leading and trailing spaces
// string are immutable in js and everytime we run a method it always returns a new string and the original string will never change
let sent = "Full Stack Developer";
console.log(sent.includes("Stack")); // checks the presence of something in a string
