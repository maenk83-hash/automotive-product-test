const products = [
  {
    name: "Hydraulic Car Lift",
    spec: "Capacity 4 Ton, 2-Post, 220V",
    price: "$3,500",
    image: "car-lift.jpg",
    video: "https://www.youtube.com/watch?v=abcd1234"
  },
  {
    name: "Wheel Balancer",
    spec: "Automatic, Digital Display",
    price: "$1,200",
    image: "tire-balancer.jpg",
    video: "https://www.youtube.com/watch?v=efgh5678"
  },
  {
    name: "Wheel Aligner",
    spec: "3D Camera, Precision ±0.01°",
    price: "$5,800",
    image: "wheel-aligner.jpg",
    video: "https://www.youtube.com/watch?v=ijkl9101"
  }
];

const container = document.getElementById("product-list");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <div class="content">
      <h2>${p.name}</h2>
      <p><strong>Spec:</strong> ${p.spec}</p>
      <p><strong>Price:</strong> ${p.price}</p>
      <p><a href="${p.video}" target="_blank">▶ Watch Video</a></p>
    </div>
  `;
  container.appendChild(card);
});