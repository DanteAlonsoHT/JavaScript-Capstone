import makePokemonPage from './pokemonPage';
import makeItemPage from './itemPage';
import makeBerryPage from './berryPage';
import importPokemon from './importPokemon';
import importItems from './importItems';
import importBerries from './importBerries';
// import css from './styles.css';

const pokePage = document.getElementById('poke');
const itemPage = document.getElementById('item');
const berryPage = document.getElementById('berry');

 makePokemonPage();
 makeBerryPage();
 makeItemPage();

berryPage.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    document.getElementById('pokePage').classList.add('d-none');
    document.getElementById('itemPage').classList.add('d-none');
    document.getElementById('berryPage').classList.remove('d-none');
});


pokePage.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    document.getElementById('pokePage').classList.remove('d-none');
    document.getElementById('itemPage').classList.add('d-none');
    document.getElementById('berryPage').classList.add('d-none');
});


itemPage.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    document.getElementById('pokePage').classList.add('d-none');
    document.getElementById('itemPage').classList.remove('d-none');
    document.getElementById('berryPage').classList.add('d-none');
});

// importPokemon();
// importItems();
importBerries();
