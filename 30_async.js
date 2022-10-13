// async and await

async function shishir() {
  let kolkataWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 degree");
    }, 3000);
  });
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("35 degree");
    }, 5000);
  });

  console.log("Fetching kolkata's weather");
  let kolkataW = await kolkataWeather;
  console.log("Fetched kolkaata's weather");
  console.log("Fetching delhi's weather");
  let delhiW = await delhiWeather;
  console.log("Fetched delhi's weather");
  return [kolkataW, delhiW];
}

const cherry = async () => {
  console.log("Full Stack Developer");
};

const main1 = async () => {
  console.log("Welcome to the weather app");
  let a = await shishir();
  let b = await cherry();
  console.log(a); // here since we have used a =await so this means a is not a promise since we have used await so it will wait for the promise to resolve and then it will store the value, so we can simply used the value of a
};
main1();
