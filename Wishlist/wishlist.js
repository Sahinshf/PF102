const cars = [
  {
    id: 1,
    color: "Red",
    brand: "Ford",
    model: "Mustang GT",
    year: 2015,
  },
  {
    id: 2,
    color: "Silver",
    brand: "Toyota",
    model: "Corolla LE",
    year: 2018,
  },
  {
    id: 3,
    color: "Black",
    brand: "Chevrolet",
    model: "Camaro SS",
    year: 2016,
  },
  {
    id: 4,
    color: "White",
    brand: "Honda",
    model: "Civic EX",
    year: 2017,
  },
  {
    id: 5,
    color: "Blue",
    brand: "Nissan",
    model: "Altima SL",
    year: 2014,
  },
  {
    id: 6,
    color: "Gray",
    brand: "Volkswagen",
    model: "Golf GTI",
    year: 2019,
  },
  {
    id: 7,
    color: "Red",
    brand: "Dodge",
    model: "Challenger R/T",
    year: 2018,
  },
  {
    id: 8,
    color: "Silver",
    brand: "BMW",
    model: "3 Series 328i",
    year: 2016,
  },
  {
    id: 9,
    color: "Black",
    brand: "Mercedes-Benz",
    model: "C-Class C 300",
    year: 2017,
  },
  {
    id: 10,
    color: "White",
    brand: "Audi",
    model: "A4 2.0T",
    year: 2018,
  },
  {
    id: 11,
    color: "Blue",
    brand: "Hyundai",
    model: "Elantra Limited",
    year: 2017,
  },
  {
    id: 12,
    color: "Gray",
    brand: "Kia",
    model: "Optima SX",
    year: 2016,
  },
  {
    id: 13,
    color: "Red",
    brand: "Mazda",
    model: "Mazda3 Sport",
    year: 2019,
  },
  {
    id: 14,
    color: "Silver",
    brand: "Subaru",
    model: "Impreza Premium",
    year: 2018,
  },
  {
    id: 15,
    color: "Black",
    brand: "Jeep",
    model: "Wrangler Rubicon",
    year: 2017,
  },
];
const carsContainer = document.querySelector(".cars-container");

let wishlistProducts = [];
wishlistProducts = JSON.parse(localStorage.getItem("wishlist")) || []; // !!

function DisplayCars(arr) {
  arr.forEach((id) => {
    // Find Element By Id
    const indexOfCar = cars.findIndex((e) => e.id === id); // 0
    const car = cars[indexOfCar];

    //Display
    const carCard = document.createElement("div");
    carCard.className = "car-card";

    const carBrand = document.createElement("h2");
    carBrand.textContent = car.brand + " - " + car.model;

    const carColor = document.createElement("p");
    carColor.textContent = "Color: " + car.color;

    const carYear = document.createElement("p");
    carYear.textContent = "Year: " + car.year;

    const icon = document.createElement("i");

    // Decision
    if (wishlistProducts.includes(car.id)) {
      icon.className = "fa-solid fa-heart fa-xl iconCursor";
    } else {
      icon.className = "fa-regular fa-heart fa-xl iconCursor";
    }

    // Add Html
    carCard.append(carBrand, carColor, carYear, icon);
    carsContainer.append(carCard);

    icon.addEventListener("click", () => {
      if (wishlistProducts.includes(car.id)) {
        const indexOfCar = wishlistProducts.findIndex((e) => e === car.id);
        icon.className = "fa-regular fa-heart fa-xl iconCursor";

        wishlistProducts.splice(indexOfCar, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlistProducts));

        carsContainer.innerHTML = "";
        DisplayCars(wishlistProducts);
      }
    });
  });
}

DisplayCars(wishlistProducts); // [1,2,4,15]
