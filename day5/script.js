const products = [
  {
    name: "Laptop",
    description: "High-performance laptop for work and gaming.",
    price: "₹80,000",
    image:"laptop.jpg",
  },
  {
    name: "macbook",
    description: "Sleek and powerful MacBook for professionals.",
    price: "1,00,000",
    image:"macbook.jpeg",
  },
  {
    name: "Apple iPhone",
    description: "Latest green color iphone with updated Ai features",
    price: "70,000",
    image:"iphone.jpeg",
  },
  {
    name: "Airpods",
    description: "Wireless Airpods with active noise cancellation.",
    price: "₹3,000",
    image:"headphones.jpeg",
  },
  {
    name: "Smart Watch",
    description: "Track your health and notifications.",
    price: "₹67,900",
    image:"watch.jpeg",
  },

  {
    name: "Panasonic ac",
    description: "Track your health and notifications.",
    price: "₹50,000",
    image:"ac image.jpeg",
  },
];

const cardContainer = document.getElementById("cardContainer");

const name='satyawan'
cardContainer.innerHTML =  
products.map(
    (product) => 
      `
        <div class="card">
        <img src="${product.image}" alt="${product.name}" />
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            
        </div>
    `
  );