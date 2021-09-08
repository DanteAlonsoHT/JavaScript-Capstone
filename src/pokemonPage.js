import gotToCommentPage from './commentPage';

const makePokemonPage = () => {
    
const pokemonPage =  document.createElement('article');

pokemonPage.innerHTML = `
<h2 id="pokeTitle"> Showing x pokemon</h2>
<section>
    
</section>
`;
pokemonPage.id = 'pokePage';
document.querySelector('main').appendChild(pokemonPage);
document.getElementById('comment-pokemon-0').addEventListener('click', (e) => { 
  e.preventDefault();
  gotToCommentPage(0, 'pokemon');
});
};

export default makePokemonPage;