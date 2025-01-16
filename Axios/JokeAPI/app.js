const BASE_URL = "https://official-joke-api.appspot.com/jokes/random";

const getJokeButton = document.getElementById("getJokeBtn");

const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const errorMessage = document.getElementById("errorMessage");

async function GetJokesAsync() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function handleDisplayFunctionAsync() {
  const data = await GetJokesAsync();
  if (data) {
    DisplayFunction(data);
  } else {
    errorMessage.textContent = "Something went wrong...";
  }
}

function DisplayFunction(data) {
  setupEl.textContent = data.setup;
  punchlineEl.textContent = data.punchline;
}

getJokeButton.addEventListener("click", handleDisplayFunctionAsync);
