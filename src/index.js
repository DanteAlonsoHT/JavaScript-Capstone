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




// pokePage.addEventListener('click', (e)=>{
//     document.querySelector()
// });