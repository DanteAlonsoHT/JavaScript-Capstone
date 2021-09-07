const makePokemonPage = () => {const pokemonPage =  document.createElement('article');

pokemonPage.innerHTML = `
<h2> Showing 1 pokemon</h2>
<section>
    <h4>pikachu</h4>
    <p>Pokedex ID: 25</p>
    <p>Weigth: 60</p>
    <p>Types: Electric</p>
    <p>Heigth: 4</p>

    
    <a class="btn" href="#"> like</a>
    <a class="btn" href="#"> comment</a>
    <a class="btn" href="#"> reserve</a>
    
</section>
`;
pokemonPage.id = 'pokePage';
document.querySelector('main').appendChild(pokemonPage);
}

export default makePokemonPage();