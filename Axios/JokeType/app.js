const jokeTypeSelect = document.getElementById("jokeType");
const generateButton = document.getElementById("generateButton");
const jokeSetup = document.getElementById("setup");
const jokePunchline = document.getElementById("punchline");

let selectedType = "";

const BASE_URL = "https://official-joke-api.appspot.com";
const endpoints = {
  types: "/types",
};

// type = general knock-knock ....
async function getJokeByTypeAsync(type) {
  try {
    const response = await axios.get(`${BASE_URL}/jokes/${type}/random`);
    return response.data[0];
  } catch (error) {
    console.log("Error :  " + error);
  }
}

async function getJokeTypesAsync() {
  try {
    const response = await axios.get(`${BASE_URL}${endpoints.types}`);
    return response.data;
  } catch (error) {
    console.log("Error :  " + error);
  }
}

function displayJokeTypes(types) {
  types.forEach((type) => {
    const typeOption = document.createElement("option");
    typeOption.textContent = type.charAt(0).toLocaleUpperCase() + type.slice(1);

    typeOption.value = type;

    jokeTypeSelect.append(typeOption);
  });
}

async function generateJokeTypesAsync() {
  const types = await getJokeTypesAsync();
  displayJokeTypes(types);
}

function displayJoke(joke) {
  jokeSetup.textContent = joke.setup;
  jokePunchline.textContent = joke.punchline;
}

async function generateJokeAsync() {
  let joke = undefined;
  if (selectedType !== "") {
    joke = await getJokeByTypeAsync(selectedType);
  }

  if (joke) {
    displayJoke(joke);
  } else {
    console.log("Error");
  }
}

jokeTypeSelect.addEventListener("change", (e) => {
  generateButton.disabled = false;
  selectedType = e.target.value;
});

generateButton.addEventListener("click", generateJokeAsync);

generateJokeTypesAsync();
