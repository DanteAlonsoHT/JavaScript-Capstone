import { getItemComments } from './involvementAPI';
import { displayPokemon, displayItem, displayBerry } from './showObject';

const gotToCommentPage = (num, category, iName) => {
  if (category === 'item') {
    const itemPage = document.getElementById('item-article');
    itemPage.innerHTML = '';
    displayItem(num);
  } else if (category === 'pokemon') {
    const pokePage = document.getElementById('pokemon-article');
    pokePage.innerHTML = '';
    displayPokemon(num);
  } else if (category === 'berry') {
    const berryPage = document.getElementById('berry-article');
    berryPage.innerHTML = '';
    displayBerry(num);
  }
  if (!document.querySelector('form')) {
    getItemComments(iName); 
  }
}

export default gotToCommentPage;
