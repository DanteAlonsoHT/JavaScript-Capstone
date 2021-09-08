
const displayPokemon = async (id) => {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id+1}`);
  let pokemon = await response.json();
  const pokePage = document.getElementById('pokePage');
  let div = document.createElement('section');
  div.innerHTML = `
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

export default displayPokemon;