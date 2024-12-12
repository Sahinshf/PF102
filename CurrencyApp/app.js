const dollar = document.querySelector(".dollar");
const euro = document.querySelector(".euro");
const manat = document.querySelector(".manat");
const currency = document.querySelector(".currencyInput");
const convert = document.querySelector(".convert");
const manatValue = document.querySelector(".manatValue");
const validationForInput = document.querySelector(".validationForInput");
const inputValidation = document.querySelector(".inputValidation");

let currentCurrency = "";
const convertFromDollar = 1.7;
const convertFromEuro = 1.8;

dollar.addEventListener("click", () => {
  if (dollar.classList.contains("checkedCurrency")) {
    dollar.classList.remove("checkedCurrency");
    currentCurrency = "";
  } else {
    currentCurrency = "dollar";
    validationForInput.innerHTML = "";

    dollar.classList.add("checkedCurrency");

    if (euro.classList.contains("checkedCurrency")) {
      euro.classList.remove("checkedCurrency");
    }
  }
});

euro.addEventListener("click", () => {
  if (euro.classList.contains("checkedCurrency")) {
    euro.classList.remove("checkedCurrency");
    currentCurrency = "";
  } else {
    currentCurrency = "euro";
    validationForInput.innerHTML = "";

    euro.classList.add("checkedCurrency");

    if (dollar.classList.contains("checkedCurrency")) {
      dollar.classList.remove("checkedCurrency");
    }
  }
});

convert.addEventListener("click", () => {
  let inputValue = currency.value;
  if (inputValue == "") {
    inputValidation.innerHTML = "You should enter value";
    if (currentCurrency == "") {
      validationForInput.innerHTML = "You should select currency";
    }
  } else {
    if (currentCurrency == "dollar") {
      inputValidation.innerHTML = "";
      manatValue.innerHTML = (+inputValue * convertFromDollar).toFixed(2);
    } else if (currentCurrency == "euro") {
      inputValidation.innerHTML = "";

      manatValue.innerHTML = (+inputValue * convertFromEuro).toFixed(2);
    } else {
      validationForInput.innerHTML = "You should select currency";
    }
  }
});
