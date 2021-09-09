import { postComment } from './involvementAPI';
import { displayPokemon, displayItem, displayBerry } from './showObject';

const gotToCommentPage = (num, category, iName) => {
  if (category === 'item') {
    const itemPage = document.getElementById('item-article');
    itemPage.innerHTML = '';
    displayItem(num);
  }
  else if (category === 'pokemon') {
    const pokePage = document.getElementById('pokemon-article');
    pokePage.innerHTML = '';
    displayPokemon(num);
  }
  else if (category ==='berry') {
    const berryPage = document.getElementById('berry-article');
    berryPage.innerHTML = '';
    displayBerry(num);
  }
  if (!document.querySelector('form')) {
    const mainTag = document.querySelector('main');
    const commentsHeading = document.createElement('h3');
    commentsHeading.innerText = 'Comments (0)';
    commentsHeading.classList.add('form-heading');
    mainTag.appendChild(commentsHeading);
    const formHeading = document.createElement('h4');
    formHeading.innerText= 'Add a comment';
    formHeading.classList.add('form-heading');
    mainTag.appendChild(formHeading);
    const commentForm = document.createElement('form');
    commentForm.innerHTML = `
      <input id="commenter-name" name="name" type="text" placeholder="Your Name" required></input>
      <br>
      <textarea id="comment-insights" name="insights" placeholder="Your Insights" required></textarea>
      <br>
      <button id="commentBtn" type="submit">Comment</button>`;
    mainTag.appendChild(commentForm);
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('commenter-name').value;
      const insights = document.getElementById('comment-insights').value;
      postComment(iName, name, insights);
    }); 
  }
}

export default gotToCommentPage;
