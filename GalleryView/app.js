// const activeImage = document.querySelector(".activeImage");

// const mainImageholder = document.querySelector(".mainImageholder");

// const miniImageHolder1 = document.querySelector(".miniImageHolder1");
// const miniImageHolder2 = document.querySelector(".miniImageHolder2");
// const miniImageHolder3 = document.querySelector(".miniImageHolder3");

// const imageContainer = document.querySelector(".image-container");

// function ChangeSource(holder, src) {
//   holder.addEventListener("click", () => {
//     activeImage.src = src;
//   });
// }

// ChangeSource(mainImageholder, "./assets/image1.webp");
// ChangeSource(miniImageHolder1, "./assets/image1.webp");
// ChangeSource(miniImageHolder2, "./assets/image1.webp");
// ChangeSource(miniImageHolder3, "./assets/image1.webp");

// mainImageholder.addEventListener("click", () => {
//   activeImage.src = "./assets/mainImage.webp";
// });

// miniImageHolder1.addEventListener("click", () => {
//   activeImage.src = "./assets/image1.webp";
// });

// miniImageHolder2.addEventListener("click", () => {
//   activeImage.src = "./assets/image2.webp";
// });

// miniImageHolder3.addEventListener("click", () => {
//   activeImage.src = "./assets/image3.webp";
// });

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

productArr = [
  {
    mainImageSrc: "./assets/mainImage.webp",
    miniImageSrc: [
      "./assets/image1.webp",
      "./assets/image2.webp",
      "./assets/image3.webp",
    ],
  },
];

const galleryContainer = document.querySelector(".container");

productArr.forEach((product) => {
  galleryContainer.innerHTML += `<div class="gallery">
        <div class="main-image">
          <img class="activeImage" src="${product.mainImageSrc}" />
        </div>
        <div class="optional-images">
        
          <div class="image-container">
            <img class="mainImageholder" src="${product.mainImageSrc}" />
          </div>

          ${product.miniImageSrc
            .map((mini) => {
              return `<div class="image-container">
                        <img class="miniImageHolder1" src="${mini}" />
                      </div>`;
            })
            .join("")}
        </div>
  </div>`;
});
