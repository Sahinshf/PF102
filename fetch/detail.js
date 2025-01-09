const apiUrl = "https://northwind.vercel.app/api/products/";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
console.log(productId);

if (productId) {
  fetch(`${apiUrl}${productId}`)
    .then((response) => response.json())
    .then((product) => {
      console.log(product);
      if (JSON.stringify(product) === "{}") {
        document.getElementById(
          "product-details"
        ).innerText = `No product with this ID : ${productId} provided.`;
      } else {
        displayProductDetails(product);
      }
    })
    .catch((error) => {});
} else {
  document.getElementById("product-details").innerText =
    "No product ID provided.";
}

function displayProductDetails(product) {
  const detailsContainer = document.getElementById("product-details");

  detailsContainer.innerHTML = `
    <h2>ID: ${product.id}</h2>
    <h3>Name: ${product.name}</h3>
    <p>Price: ${product.unitPrice}</p>
    <p>Quantity: ${product.quantityPerUnit}</p>
  `;
}
