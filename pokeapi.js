const url = "https://pokeapi.co/api/v2/pokemon";
const ul = document.getElementById("pokelist");
const pre = document.getElementById("previous");
const next = document.getElementById("next");
const content = document.getElementById("content");

function createPoke(pokemon) {
  content.innerHTML = `<h1>${pokemon.name}</h1>
  <img src ='${pokemon.sprites.front_default}'>`;
}

function fetchPoke(url) {
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createPoke(data);
    });
}

function fetchData(url) {
  //fetch the data from the url function
  fetch(url) //above continue
    .then((data) => data.json()) //turning the url into json data
    .then((data) => {
      ul.innerHTML = "";
      console.log(data);
      const list = data.results; //show the json result in web browser

      data.previous // true false statement started by the '?'
        ? previous.setAttribute("onclick", `fetchData('${data.previous}')`) // go to the previous data
        : previous.removeAttribute("onlick"); //remove the onclick for previous if there is none

      data.next
        ? next.setAttribute("onclick", `fetchData('${data.next}')`) //go to the next set of data
        : next.removeAttribute("onlick"); //remove if there is no next

      list.map((pokemon) => {
        let btn = document.createElement("button");
        btn.innerHTML = pokemon.name;
        btn.classList.add("pokemon-list-item");
        btn.setAttribute("onclick", `fetchPoke('${pokemon.url}')`);
        ul.appendChild(btn);
      });
    });
}

fetchData(url);
