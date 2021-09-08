
const displayPokemon = async (id) => {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let pokemon = await response.json();
  const pokePage = document.getElementById('pokePage');
  pokePage.innerHTML = '';
  const pokeTitle = document.createElement('h4');
  pokeTitle.id = 'pokeTitle';
  pokePage.appendChild(pokeTitle);
  pokeTitle.innerText = `Showing ${pokemon.name}`;
  let div = document.createElement('section');
  div.innerHTML = `
  <h4>${pokemon.name}</h4>
  <p>Pokedex ID: ${pokemon.id}</p>
  <p>Weight: ${pokemon.weight}</p>
  <p>Height: ${pokemon.height}</p>`;
  pokePage.appendChild(div);
};

export default displayPokemon;