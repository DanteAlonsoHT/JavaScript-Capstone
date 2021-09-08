import gotToCommentPage from './commentPage';
import importPokemon from './importPokemon';

const makePokemonPage = () => {
    
const pokemonPage =  document.createElement('article');

// pokemonPage.innerHTML = `
// <h2 id="pokeTitle"> Showing x pokemon</h2>
// <section>
//     <h4>pikachu</h4>
//     <p>Pokedex ID: 25</p>
//     <p>Weigth: 60</p>
//     <p>Types: Electric</p>
//     <p>Heigth: 4</p>

    
//     <a class="btn" href="#" id="like-pokemon-0"> like</a>
//     <a class="btn" href="#" id="comment-pokemon-0"> comment</a>
//     <a class="btn" href="#" id="reserve-pokemon-0"> reserve</a>
    
// </section>
// `;
pokemonPage.id = 'pokePage';
document.querySelector('main').appendChild(pokemonPage);
importPokemon();
// document.getElementById('comment-pokemon-0').addEventListener('click', (e) => { 
//   e.preventDefault();
//   gotToCommentPage(0, 'pokemon');
// });
};

export default makePokemonPage;