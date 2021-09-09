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
    const mainTag = document.querySelector('main');
    const formArr = document.getElementsByTagName('form');
    for (let i = 0; i < formArr.length; i += 1) {
      mainTag.removeChild(formArr[i]);
    }
    const headingArr = document.getElementsByClassName('form-heading');
    for (let k = 0; k < 2; k += 1) {
        mainTag.removeChild(headingArr[0]);
    }
    const berryAtcl = document.getElementById('berryPage');
    const showElements = berryAtcl.getElementsByClassName('displayedObj');
    for (let j = 0; j < showElements.length; j += 1) {
      berryAtcl.removeChild(showElements[j]);
    }
    berryPage.firstChild.innerText = `Showing 10 berries`;
    importBerries();
    document.getElementById('pokePage').classList.add('d-none');
    document.getElementById('itemPage').classList.add('d-none');
    document.getElementById('berryPage').classList.remove('d-none');
});


pokePage.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    const mainTag = document.querySelector('main');
    const formArr = document.getElementsByTagName('form');
    for (let i = 0; i < formArr.length; i += 1) {
      mainTag.removeChild(formArr[i]);
    }
    const headingArr = document.getElementsByClassName('form-heading');
    for (let k = 0; k < 2; k += 1) {
      mainTag.removeChild(headingArr[0]);
    }
    const pokeAtcl = document.getElementById('pokePage');
    const showElements = pokeAtcl.getElementsByClassName('displayedObj');
    for (let j = 0; j < showElements.length; j += 1) {
      pokeAtcl.removeChild(showElements[j]);
    }
    pokePage.firstChild.innerText = `Showing 10 pokemon`;
    importPokemon();
    document.getElementById('pokePage').classList.remove('d-none');
    document.getElementById('itemPage').classList.add('d-none');
    document.getElementById('berryPage').classList.add('d-none');
});


itemPage.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
    const mainTag = document.querySelector('main');
    const formArr = document.getElementsByTagName('form');
    for (let i = 0; i < formArr.length; i += 1) {
      mainTag.removeChild(formArr[i]);
    }
    const headingArr = document.getElementsByClassName('form-heading');
    for (let k = 0; k < 2; k += 1) {
        mainTag.removeChild(headingArr[0]);
    }
    const itemAtcl = document.getElementById('itemPage');
    const showElements = itemAtcl.getElementsByClassName('displayedObj');
    for (let j = 0; j < showElements.length; j += 1) {
      itemAtcl.removeChild(showElements[j]);
    }
    itemPage.firstChild.innerText = `Showing 10 items`;
    importItems();
    document.getElementById('pokePage').classList.add('d-none');
    document.getElementById('itemPage').classList.remove('d-none');
    document.getElementById('berryPage').classList.add('d-none');
});

// importPokemon();
// importItems();
importBerries();
