import { getItemComments } from './involvementAPI';
import { displayPokemon, displayItem, displayBerry } from './showObject';

const gotToCommentPage = (num, category, iName) => {
  const sectionComment = document.createElement('section');
  sectionComment.className = 'popupComments';
  if (!document.querySelector('popupComments')) {
    if (category === 'item') {
      displayItem(num);
    } else if (category === 'pokemon') {
      displayPokemon(num, sectionComment);
    } else if (category === 'berry') {
      displayBerry(num);
    }
    getItemComments(iName, category, sectionComment);
  }
};

export default gotToCommentPage;
