async function loadProfile() {
  const username = "octocat"; 
  const profileBox = document.getElementById("profile");

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    const data = await response.json();

    profileBox.innerHTML = `
      <img src="${data.avatar_url}" alt="Avatar" />
      <h2>${data.name}</h2>
      <p><strong>Username:</strong> ${data.login}</p>
      <p><strong>Bio:</strong> ${data.bio || "No bio provided"}</p>
      <p><strong>Location:</strong> ${data.location || "Unknown"}</p>
    `;
  } catch (error) {
    profileBox.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

loadProfile();

const products = [
  { id: 1, name: "Laptop", price: 700 },
  { id: 2, name: "Phone", price: 300 },
  { id: 3, name: "Tablet", price: 250 },
  { id: 4, name: "Monitor", price: 200 },
  { id: 5, name: "Keyboard", price: 50 },
  { id: 6, name: "Mouse", price: 25 },
  { id: 7, name: "Speaker", price: 150 },
  { id: 8, name: "Charger", price: 30 },
  { id: 9, name: "USB Cable", price: 10 },
  { id: 10, name: "Desk", price: 400 },
  { id: 11, name: "Chair", price: 300 },
  { id: 12, name: "Fan", price: 180 },
  { id: 13, name: "Air Conditioner", price: 1200 },
  { id: 14, name: "Heater", price: 800 },
  { id: 15, name: "Backpack", price: 60 },
  { id: 16, name: "Notebook", price: 20 },
  { id: 17, name: "Pen", price: 5 },
  { id: 18, name: "Camera", price: 500 },
  { id: 19, name: "Mic", price: 100 },
  { id: 20, name: "Tripod", price: 75 },
];


const names = products.map(p => `${p.name} - ₹${p.price}`);
console.log("Formatted Products:", names);


const cheapItems = products.filter(p => p.price < 100);
console.log("Cheap Items:", cheapItems);


const total = products.reduce((sum, item) => sum + item.price, 0);
console.log("Total Inventory Price: ₹", total);





function placeOrder(product, callback) {
  console.log(`Placing order for ${product}...`);
  setTimeout(() => {
    callback(product);
  }, 1000);
}


function makePayment(product) {
  return new Promise((resolve, reject) => {
    console.log(`Processing payment for ${product}...`);
    setTimeout(() => {
      const success = true; // Change to false to test failure
      success ? resolve(`Payment successful for ${product}`) : reject("Payment failed");
    }, 1500);
  });
}


placeOrder("Laptop", (product) => {
  console.log("Order placed!");

  makePayment(product)
    .then(msg => console.log(msg))
    .catch(err => console.error(err));
});

function placeOrder(product, callback) {
  console.log(`Placing order for ${product}...`);
  setTimeout(() => {
    callback(product);
  }, 1000);
}

function makePayment(product) {
  return new Promise((resolve, reject) => {
    console.log(`Processing payment for ${product}...`);
    setTimeout(() => {
      const success = true; // Change to false to test failure
      success ? resolve(`Payment successful for ${product}`) : reject("Payment failed");
    }, 1500);
  });
}


placeOrder("Laptop", (product) => {
  console.log("Order placed!");

  makePayment(product)
    .then(msg => console.log(msg))
    .catch(err => console.error(err));
});



const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve(" Task completed!");
  } else {
    reject(" Task failed.");
  }
});

myPromise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });


fetch("https://api.example.com/data")
  .then(res => {
    if (!res.ok) throw new Error("Server Error");
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error("Error caught:", err.message));


async function fetchData() {
  try {
    const res = await fetch("https://api.example.com/data");
    if (!res.ok) throw new Error("HTTP Error " + res.status);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Caught in try-catch:", error.message);
  }
}
