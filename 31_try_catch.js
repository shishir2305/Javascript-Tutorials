setTimeout(() => {
  console.log("Full Stack Developer");
}, 3000);

setTimeout(() => {
  console.log("Machine Learning Engineer");
  try {
    console.log(Scientist);
  } catch (error) {
    console.log(error);
  }
  // using try and will not stop or disturb the code execution and will throw the wherever required and will keep on executing the code
}, 4000);

setTimeout(() => {
  console.log("Cloud Engineer");
  //   console.log(Data Scientist); this will trhow an error but since its withing the settimeout block so will not stop the overall execution of the code
}, 5000);

// console.log(Data Scientist); this will throw an error and will stop the execution of the codw
