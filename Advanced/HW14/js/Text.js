const getInfo = document.getElementById("getInfo");
const getPlanet = document.getElementById("getPlanet");
const getNextPlanet = document.getElementById("getNextPlanet");
const infoSection = document.querySelector(".infoSection");
const getFilm = document.getElementById("getFilm");
let urlPlanet = "https://swapi.dev/api/planets/?page=1";
const urlFilm = "https://swapi.dev/api/films/";
const loader = document.getElementById("del");

function startLoader() {
    loader.classList.remove("delete-loader");
  }
  
  function stopLoader() {
    loader.classList.add("delete-loader");
  }

async function getPerson(url) {
  const res = await fetch(url).then((res) => res.json());
  return res;
}



async function getPartFilm() {
  infoSection.innerHTML = "";
  const part = getFilm.value;
  if (part < 1 || part > 6) return alert("Введіть значення від 1 до 6!");
  startLoader()
  const {characters} = await fetch(`${urlFilm}${part}`).then((res) => res.json());
  Promise
    .all(characters.map(getPerson))
    .then(persons => persons.map(({name, birth_year, gender}) => {
      return `<div class='infoElement'> <p>Name: ${name}</p><p>Birth year: ${birth_year}</p><p>Gender: ${gender}</div> `;
    }))
    .then(components => infoSection.innerHTML = components.join(''))
    .finally(stopLoader);
}

getInfo.addEventListener("click", getPartFilm);

async function getPlanets() {
  startLoader();
  infoSection.innerHTML = "";
  let planet = "";
  const res = await fetch(urlPlanet).then((res) => res.json());
  const planetsArr = res.results;
  planetsArr.forEach((namePlanet) => {
    planet += `<li style="color: rgb(228, 28, 10)">${namePlanet.name}</li>`;
  });
  infoSection.innerHTML = planet;
  stopLoader();
}

getPlanet.addEventListener("click", getPlanets);

async function nextPlanet() {
  const res = await fetch(urlPlanet).then((res) => res.json());
  if (!res.next) return;
  urlPlanet = res.next;
  getPlanets();
}

getNextPlanet.addEventListener("click", nextPlanet);