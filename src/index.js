/*eslint-disable no-unused-vars*/
import makePokemonPage from './pokemonPage';
import makeItemPage from './itemPage';
import makeBerryPage from './berryPage';
import importBerries from './importBerries';
import importItems from './importItems';
import importPokemon from './importPokemon';
import displayReservationById from './reservationPage';
import { loadReservations } from './involvementReservationAPI';
import css from './styles.css';

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
    if (headingArr.length > 0) {
      for (let k = 0; k < 2; k += 1) {
        mainTag.removeChild(headingArr[0]);
      }
    }
    const berryAtcl = document.getElementById('berry-article');
    const showElements = berryAtcl.getElementsByClassName('displayedObj');
    for (let j = 0; j < showElements.length; j += 1) {
      berryAtcl.removeChild(showElements[j]);
    }
    const div = document.createElement('section');
    div.id = 'berryPage';
    div.classList.add('d-flex');
    div.classList.add('flex-wrap');
    berryAtcl.appendChild(div);
    importBerries();
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
    const mainTag = document.querySelector('main');
    const formArr = document.getElementsByTagName('form');
    for (let i = 0; i < formArr.length; i += 1) {
      mainTag.removeChild(formArr[i]);
    }
    const headingArr = document.getElementsByClassName('form-heading');
    if (headingArr.length > 0) {
      for (let k = 0; k < 2; k += 1) {
        mainTag.removeChild(headingArr[0]);
      }
    }
    const pokeAtcl = document.getElementById('pokemon-article');
    const showElements = pokeAtcl.getElementsByClassName('displayedObj');
    for (let j = 0; j < showElements.length; j += 1) {
      pokeAtcl.removeChild(showElements[j]);
    }
    const div = document.createElement('section');
    div.id = 'pokePage';
    div.classList.add('d-flex');
    div.classList.add('flex-wrap');
    pokeAtcl.appendChild(div);
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
    if (headingArr.length > 0) {
      for (let k = 0; k < 2; k += 1) {
        mainTag.removeChild(headingArr[0]);
      }
    }
    const itemAtcl = document.getElementById('item-article');
    const showElements = itemAtcl.getElementsByClassName('displayedObj');
    for (let j = 0; j < showElements.length; j += 1) {
      itemAtcl.removeChild(showElements[j]);
    }
    const div = document.createElement('section');
    div.id = 'itemPage';
    div.classList.add('d-flex');
    div.classList.add('flex-wrap');
    itemAtcl.appendChild(div);
    importItems();
});

const pokemonContent = document.getElementById("pokePage");
const itemContent = document.getElementById("itemPage");
const berryContent = document.getElementById("berryPage");

pokemonContent.addEventListener('click', (ev) => {
    if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
        if (ev.target.id.includes("reserve-pokemon")) {
            const idPokemon = ev.target.id.replace('reserve-pokemon-', '');
            displayReservationById('pokemon',idPokemon);
            loadReservations(`pokemon-${idPokemon}`);
      }
    }
});

itemContent.addEventListener('click', (ev) => {
    if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
        if (ev.target.id.includes("reserve-item")) {
            const idItem = ev.target.id.replace('reserve-item-', '');
            displayReservationById('item',idItem);
            loadReservations(`item-${idItem}`);
      }
    }
});

berryContent.addEventListener('click', (ev) => {
    if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
        if (ev.target.id.includes("reserve-berry")) {
            const idBerry = ev.target.id.replace('reserve-berry-', '');
            displayReservationById('berry',idBerry);
            loadReservations(`berry-${idBerry}`);
      }
    }
});
