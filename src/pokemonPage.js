import importPokemon from './importPokemon';

const makePokemonPage = () => {
    
const pokemonPage =  document.createElement('article');

pokemonPage.innerHTML = `

<h2 id="pokeTitle" > Showing x pokemon</h2>
<section id='pokePage' class="d-flex flex-wrap">
</section>`;
pokemonPage.id = 'pokemon-article'
document.querySelector('main').appendChild(pokemonPage);

importPokemon();
};

export default makePokemonPage;