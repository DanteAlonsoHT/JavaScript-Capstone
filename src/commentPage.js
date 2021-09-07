import makePokemonPage from './pokemonPage';
import makeItemPage from './itemPage';
import makeBerryPage from './berryPage';

const gotToCommentPage = (num, type) => {
  const mainTag = document.querySelector('main');
  mainTag.innerHTML = '';
  if (type === 'item') {
    makeItemPage();
  }
  else if (type === 'pokemon') {
    makePokemonPage();
  }
  else if (type ==='berry') {
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
  <input class="invisible" id="number" name="number" type="number" value="${num}"></input>
  <br>
  <input id="name" name="name" type="text" placeholder="Your Name"></input>
  <br>
  <input id="insights" name="insights" type="textarea" placeholder="Your Insights"></input>
  <br>
  <button id="commentBtn" type="submit">Comment</button>`;
  mainTag.appendChild(commentForm);
}

export default gotToCommentPage();
