import makePokemonPage from './pokemonPage';
import makeItemPage from './itemPage';
import makeBerryPage from './berryPage';
// import css from './styles.css';

const pokePage = document.getElementById('poke');
const itemPage = document.getElementById('item');
const berryPage = document.getElementById('berry');

makePokemonPage();
makeBerryPage();
makeItemPage();

berryPage.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('clicked');
    document.querySelector('pokemonPage').classList.add('d-none');
    document.querySelector('itemPage').classList.add('d-none');
    document.querySelector('berryPage').classList.remove('d-none');
});

pokePage.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('clicked');
    document.querySelector('pokemonPage').classList.remove('d-none');
    document.querySelector('itemPage').classList.add('d-none');
    document.querySelector('berryPage').classList.add('d-none');
});


itemPage.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('clicked');
    document.querySelector('pokemonPage').classList.add('d-none');
    document.querySelector('itemPage').classList.remove('d-none');
    document.querySelector('berryPage').classList.add('d-none');
});



// pokePage.addEventListener('click', (e)=>{
//     document.querySelector()
// });