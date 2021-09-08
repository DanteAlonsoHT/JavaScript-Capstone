import importPokemon from './importPokemon';

const makePokemonPage = () => {
    
const pokemonPage =  document.createElement('article');

pokemonPage.innerHTML = `
<h2 id="pokeTitle"> Showing 10 pokemon</h2>
<section>

</section>`;
pokemonPage.id = 'pokePage';
document.querySelector('main').appendChild(pokemonPage);
importPokemon();
};

export default makePokemonPage;