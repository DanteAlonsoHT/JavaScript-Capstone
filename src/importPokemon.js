/* eslint-disable no-await-in-loop */
import populatePokemon from './populatePokemon';

const importPokemon = async () => {
  const list = [];

  for (let i = 0; i < 22; i += 1) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`);
    const obj = await response.json();
    const pokemon = {};
    pokemon.name = obj.name;
    pokemon.id = obj.id;
    pokemon.weight = obj.weight;
    pokemon.height = obj.height;
    pokemon.sprite = obj.sprites.front_default;
    list.push(pokemon);
  }
  populatePokemon(list);
};

export default importPokemon;