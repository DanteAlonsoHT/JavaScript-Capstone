
const displayPokemon = async (id) => {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let pokemon = await response.json();
  const pokePage = document.getElementById('pokePage');
  let div = document.createElement('section');
  div.classList.add('displayedObj');
  div.innerHTML = `
  <img class="card_img" alt="pokemon-${pokemon.id}" src="${pokemon.sprite}">
  <h4>${pokemon.name}</h4>
  <p>Pokedex ID: ${pokemon.id}</p>
  <p>Weight: ${pokemon.weight}</p>
  <p>Height: ${pokemon.height}</p>`;
  const pokeTitle = document.createElement('h4');
  pokeTitle.id = 'pokeTitle';
  pokePage.appendChild(pokeTitle);
  pokeTitle.innerText = `Showing ${pokemon.name}`;
  pokePage.appendChild(div);
};

const displayItem = async (id) => {
  let response = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
  let item = await response.json();
  const itemPage = document.getElementById('itemPage');
  let div = document.createElement('section');
  div.classList.add('displayedObj');
  div.innerHTML = `
  <img class="card_img" alt="item-${item.id}" src="${item.sprite}">
  <h4>${item.name}</h4>
  <p>Item ID: ${item.id}</p>
  <p>Category: ${item.category}</p>`;
  const itemTitle = document.createElement('h4');
  itemTitle.id = 'itemTitle';
  itemPage.appendChild(itemTitle);
  itemTitle.innerText = `Showing ${item.name}`;
  itemPage.appendChild(div);
};

const displayBerry = async (id) => {
  let response = await fetch(`https://pokeapi.co/api/v2/berry/${id}`);
  let berry = await response.json();
  const berryPage = document.getElementById('berryPage');
  let div = document.createElement('section');
  div.classList.add('displayedObj');
  div.innerHTML = `
  <h4>${berry.name}</h4>
  <p>Item ID: ${berry.id}</p>
  <p>max harvest: ${berry.maxHarvest}</p>`;
  const berryTitle = document.createElement('h4');
  berryTitle.id = 'itemTitle';
  berryPage.appendChild(itemTitle);
  berryTitle.innerText = `Showing ${berry.name}`;
  berryPage.appendChild(div);
};

export { displayPokemon, displayItem, displayBerry };