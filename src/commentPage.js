import makeBerryPage from './berryPage';
import { displayPokemon, displayItem } from './showObject';

const gotToCommentPage = (num, category) => {
  if (category === 'item') {
    const itemPage = document.getElementById('itemPage');
    itemPage.innerHTML = '';
    displayItem(num);
  } else if (category === 'pokemon') {
    const pokePage = document.getElementById('pokePage');
    pokePage.innerHTML = '';
    displayPokemon(num);
  } else if (category === 'berry') {
    makeBerryPage();
  }
  const mainTag = document.querySelector('main');
  const commentsHeading = document.createElement('h3');
  commentsHeading.innerText = 'Comments (0)';
  commentsHeading.classList.add('form-heading');
  mainTag.appendChild(commentsHeading);
  const formHeading = document.createElement('h4');
  formHeading.innerText = 'Add a comment';
  formHeading.classList.add('form-heading');
  mainTag.appendChild(formHeading);
  const commentForm = document.createElement('form');
  commentForm.innerHTML = `
  <input class="d-none" id="number" name="number" type="number" value="${num}"></input>
  <br>
  <input id="name" name="name" type="text" placeholder="Your Name"></input>
  <br>
  <textarea id="insights" name="insights" placeholder="Your Insights"></textarea>
  <br>
  <button id="commentBtn" type="submit">Comment</button>`;
  mainTag.appendChild(commentForm);
};

export default gotToCommentPage;
