const apiUrl = "https://northwind.vercel.app/api/products";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    displayProducts(data);
  })
  .catch((error) => {
    console.error(error);
  });

function displayProducts(data) {
  const productContainer = document.querySelector(".product-container");

  data.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <h3>${product.id}</h3>
        <p>${product.name}</p>
        <button class="details-btn" data-id="${product.id}">View Details</button>
      `;

    productContainer.appendChild(productElement);
  });

  const detailButtons = document.querySelectorAll(".details-btn");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-id");

      window.location.href = `details.html?id=${productId}`;
    });
  });
}
