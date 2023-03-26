// DOM elements
const lightButton = document.getElementById("light");
const darkButton = document.getElementById("dark");
const solarButton = document.getElementById("solar");
const body = document.body; // not 100% required

//using local storage to store what theme is being used

const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

//Using event listeners to react on a click

darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  // also works with document.body.classList.replace("");
  localStorage.setItem("theme", "dark");
};

lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};

solarButton.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    solarButton.style.cssText = `--bg-solar: var(--yellow)`;

    solarButton.innerText = "solarize";
    localStorage.removeItem("isSolar");
  } else {
    solarButton.style.cssText = `--bg-solar: white`;

    body.classList.add("solar");
    solarButton.innerText = "normalize";

    localStorage.setItem("isSolar", true);
  }
};
