const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const count = document.querySelector(".count");
const reset = document.querySelector(".reset");

increment.addEventListener("click", () => {
  count.innerHTML = +count.innerHTML + 1;
});

decrement.addEventListener("click", () => {
  if (count.innerHTML > 0) {
    count.innerHTML = +count.innerHTML - 1;
  }
});

reset.addEventListener("click", () => {
  count.innerHTML = 0;
});
