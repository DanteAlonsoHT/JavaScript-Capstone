import makePokemonPage from './pokemonPage';
import makeItemPage from './itemPage';
import makeBerryPage from './berryPage';
import css from './styles.css';

const pokePage = document.getElementById('poke');
const itemPage = document.getElementById('item');
const berryPage = document.getElementById('berry');

 makePokemonPage();
 makeBerryPage();
 makeItemPage();

berryPage.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    document.getElementById('pokemon-article').classList.add('d-none');
    document.getElementById('item-article').classList.add('d-none');
    document.getElementById('berry-article').classList.remove('d-none');
    pokePage.classList.remove('current');
    itemPage.classList.remove('current');
    berryPage.classList.add('current');
});


pokePage.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    document.getElementById('pokemon-article').classList.remove('d-none');
    document.getElementById('item-article').classList.add('d-none');
    document.getElementById('berry-article').classList.add('d-none');
    pokePage.classList.add('current');
    itemPage.classList.remove('current');
    berryPage.classList.remove('current');
});


itemPage.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    document.getElementById('pokemon-article').classList.add('d-none');
    document.getElementById('item-article').classList.remove('d-none');
    document.getElementById('berry-article').classList.add('d-none');
    pokePage.classList.remove('current');
    itemPage.classList.add('current');
    berryPage.classList.remove('current');
});

