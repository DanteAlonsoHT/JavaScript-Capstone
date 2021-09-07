import gotToCommentPage from './commentPage';

const makePokemonPage = () => {const pokemonPage =  document.createElement('article');

pokemonPage.innerHTML = `
<h2> Showing 1 pokemon</h2>
<section>
    <h4>pikachu</h4>
    <p>Pokedex ID: 25</p>
    <p>Weigth: 60</p>
    <p>Types: Electric</p>
    <p>Heigth: 4</p>

    
    <a class="btn" href="#" id="like-0"> like</a>
    <a class="btn" href="#" id="comment-0"> comment</a>
    <a class="btn" href="#" id="reserve-0"> reserve</a>
    
</section>
`;
pokemonPage.id = 'pokePage';
document.querySelector('main').appendChild(pokemonPage);
document.getElementById('comment-0').addEventListener('click', gotToCommentPage(0, 'pokemon'));
}

export default makePokemonPage();