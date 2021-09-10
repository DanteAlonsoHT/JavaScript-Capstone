const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeWaTSWdgI5EoHhdFxch/comments';

const postComment = async (objName, userName, content) => {
  await fetch(commentURL, {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: objName, username: userName, comment: content }),
  })
    .then((response) => response)
    .then((json) => console.log(json));
};

const getItemComments = async (objName) => {
  /* eslint-disable-next-line */
  const response = await fetch(`${commentURL}?item_id=${objName}`, {
    mode: 'cors',
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      const mainEl = document.querySelector('main');
      if (!document.querySelector('form')) {
        const commentUl = document.createElement('ul');
        commentUl.classList.add('comment-list');
        for (let i = 0; i < data.length; i += 1) {
          const commentLi = document.createElement('li');
          commentLi.innerHTML = `<strong>${data[i].creation_date} ${data[i].username}:</strong> ${data[i].comment}`;
          commentUl.appendChild(commentLi);
        }
        mainEl.appendChild(commentUl);
        const commentsHeading = document.createElement('h3');
        if (!data.length) {
          commentsHeading.innerText = 'Comments (0)';
        } else {
          commentsHeading.innerText = `Comments (${data.length})`;
        }
        commentsHeading.classList.add('form-heading');
        mainEl.appendChild(commentsHeading);
        mainEl.classList.add('display');
        const formHeading = document.createElement('h4');
        formHeading.innerText = 'Add a comment';
        formHeading.classList.add('form-heading');
        mainEl.appendChild(formHeading);
        const commentForm = document.createElement('form');
        commentForm.innerHTML = `
          <input id="commenter-name" name="name" type="text" placeholder="Your Name" required></input>
          <br>
          <textarea id="comment-insights" name="insights" placeholder="Your Insights" required></textarea>
          <br>
          <button id="commentBtn" type="submit">Comment</button>`;
        mainEl.appendChild(commentForm);
        commentForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('commenter-name').value;
          const insights = document.getElementById('comment-insights').value;
          postComment(objName, name, insights);
          const newCommentLi = document.createElement('li');
          const today = new Date();
          const dd = String(today.getDate()).padStart(2, '0');
          const mm = String(today.getMonth() + 1).padStart(2, '0');
          const yyyy = today.getFullYear();
          const date = `${yyyy}-${mm}-${dd}`;
          newCommentLi.innerHTML = `<strong>${date} ${name}:</strong> ${insights}`;
          commentUl.appendChild(newCommentLi);
          commentsHeading.innerText = `Comments (${data.length + 1})`;
        });
      }
    });
};

export { postComment, getItemComments };