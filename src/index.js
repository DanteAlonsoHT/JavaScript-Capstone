/*eslint-disable no-unused-vars*/
import makePokemonPage from './pokemonPage';
import makeItemPage from './itemPage';
import makeBerryPage from './berryPage';
import css from './styles.css';
import importBerries from './importBerries';
import importPokemon from './importPokemon';
import importItems from './importItems';

const pokePage = document.getElementById('poke');
const itemPage = document.getElementById('item');
const berryPage = document.getElementById('berry');

makePokemonPage();
makeBerryPage();
makeItemPage();

berryPage.addEventListener('click', (e) => {
  e.preventDefault();

  document.getElementById('pokemon-article').classList.add('d-none');
  document.getElementById('item-article').classList.add('d-none');
  document.getElementById('berry-article').classList.remove('d-none');
  pokePage.classList.remove('current');
  itemPage.classList.remove('current');
  berryPage.classList.add('current');

  const mainTag = document.querySelector('main');
  const formArr = document.getElementsByTagName('form');
  for (let i = 0; i < formArr.length; i += 1) {
    mainTag.removeChild(formArr[i]);
  }
  const headingArr = document.getElementsByClassName('form-heading');
  for (let k = 0; k < headingArr.length; k += 1) {
    mainTag.removeChild(headingArr[k]);
  }
  const berryAtcl = document.getElementById('berryPage');
  const showElements = berryAtcl.getElementsByClassName('displayedObj');
  for (let j = 0; j < showElements.length; j += 1) {
    berryAtcl.removeChild(showElements[j]);
  }
  berryPage.firstChild.innerText = 'Showing 10 berries';
  importBerries();
});

pokePage.addEventListener('click', (e) => {
  e.preventDefault();

  document.getElementById('pokemon-article').classList.remove('d-none');
  document.getElementById('item-article').classList.add('d-none');
  document.getElementById('berry-article').classList.add('d-none');
  pokePage.classList.add('current');
  itemPage.classList.remove('current');
  berryPage.classList.remove('current');
  const mainTag = document.querySelector('main');
  const formArr = document.getElementsByTagName('form');
  for (let i = 0; i < formArr.length; i += 1) {
    mainTag.removeChild(formArr[i]);
  }
  const headingArr = document.getElementsByClassName('form-heading');
  for (let k = 0; k < headingArr.length; k += 1) {
    mainTag.removeChild(headingArr[k]);
  }
  const pokeAtcl = document.getElementById('pokePage');
  const showElements = pokeAtcl.getElementsByClassName('displayedObj');
  for (let j = 0; j < showElements.length; j += 1) {
    pokeAtcl.removeChild(showElements[j]);
  }
  pokePage.firstChild.innerText = 'Showing 10 pokemon';
  importPokemon();
});

itemPage.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('pokemon-article').classList.add('d-none');
  document.getElementById('item-article').classList.remove('d-none');
  document.getElementById('berry-article').classList.add('d-none');
  pokePage.classList.remove('current');
  itemPage.classList.add('current');
  berryPage.classList.remove('current');

  const mainTag = document.querySelector('main');
  const formArr = document.getElementsByTagName('form');
  for (let i = 0; i < formArr.length; i += 1) {
    mainTag.removeChild(formArr[i]);
  }
  const headingArr = document.getElementsByClassName('form-heading');
  for (let k = 0; k < headingArr.length; k += 1) {
    mainTag.removeChild(headingArr[k]);
  }
  const itemAtcl = document.getElementById('itemPage');
  const showElements = itemAtcl.getElementsByClassName('displayedObj');
  for (let j = 0; j < showElements.length; j += 1) {
    itemAtcl.removeChild(showElements[j]);
  }
  itemPage.firstChild.innerText = 'Showing 10 items';
  importItems();
});
