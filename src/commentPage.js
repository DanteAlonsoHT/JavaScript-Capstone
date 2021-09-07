import makePokemonPage from './pokemonPage';
import makeItemPage from './itemPage';
import makeBerryPage from './berryPage';

const gotToCommentPage = (num, category) => {
  const mainTag = document.querySelector('main');
  mainTag.innerHTML = '';
  if (category === 'item') {
    makeItemPage();
  }
  else if (category === 'pokemon') {
    makePokemonPage();
  }
  else if (category ==='berry') {
    makeBerryPage();
  }
  const commentsHeading = document.createElement('h3');
  commentsHeading.innerText = 'Comments (0)';
  mainTag.appendChild(commentsHeading);
  const formHeading = document.createElement('h4');
  formHeading.innerHTML = 'Add a comment';
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
}

export default gotToCommentPage;
