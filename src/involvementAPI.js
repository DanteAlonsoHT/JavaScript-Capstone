const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeWaTSWdgI5EoHhdFxch/comments';

const postComment = async (objName, userName, content) => {
  await fetch(commentURL, {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: objName, username: userName, comment: content }),
  });
};

const getItemComments = async (objName, category, sectionComment) => {
  /* eslint-disable-next-line */
  const response = await fetch(`${commentURL}?item_id=${objName}`, {
    mode: 'cors',
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      if (!document.querySelector('form')) {
        const commentUl = document.createElement('ul');
        commentUl.classList.add('comment-list');
        for (let i = 0; i < data.length; i += 1) {
          const commentLi = document.createElement('li');
          commentLi.innerHTML = `<strong>${data[i].creation_date} ${data[i].username}:</strong> ${data[i].comment}`;
          commentUl.appendChild(commentLi);
        }
        sectionComment.appendChild(commentUl);
        const commentsHeading = document.createElement('h3');
        if (!data.length) {
          commentsHeading.innerText = 'Comments (0)';
        } else {
          commentsHeading.innerText = `Comments (${data.length})`;
        }
        commentsHeading.classList.add('form-heading');
        sectionComment.appendChild(commentsHeading);
        sectionComment.classList.add('display');
        const formHeading = document.createElement('h4');
        formHeading.innerText = 'Add a comment';
        formHeading.classList.add('form-heading');
        sectionComment.appendChild(formHeading);
        const commentForm = document.createElement('form');
        commentForm.innerHTML = `
          <input id="commenter-name" name="name" type="text" placeholder="Your Name" class="form-control" required></input>
          <br>
          <textarea id="comment-insights" name="insights" placeholder="Your Insights" class="form-control" required></textarea>
          <br>
          <button id="commentBtn" type="submit" class="btn btn-outline-light">Comment</button>`;
        commentForm.classList.add('d-flex');
        commentForm.classList.add('flex-column');
        commentForm.classList.add('align-items-center');
        sectionComment.appendChild(commentForm);
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
          if (!data.length) {
            commentsHeading.innerText = 'Comments (1)';
          } else {
            commentsHeading.innerText = `Comments (${parseInt(data.length, 10) + 1})`;
          }
          if (category === 'pokemon') {
            commentForm.reset();
          } else if (category === 'item') {
            commentForm.reset();
          } else if (category === 'berry') {
            commentForm.reset();
          }
        });
      }
      document.querySelector('main').appendChild(sectionComment);
      document.querySelector('body').addEventListener('click', (ev) => {
        const currentPopUp = document.querySelector('.popupComments');
        if (ev.target !== currentPopUp && currentPopUp) {
          if (!currentPopUp.contains(ev.target)) {
            document.querySelector('.popupComments').remove();
          }
        }
      });
      if (document.querySelectorAll('.popupComments').length > 1) {
        const allReservations = document.querySelectorAll('.popupComments');
        allReservations.forEach((reservationPopup, index) => {
          if (index !== 0) {
            reservationPopup.remove();
          }
        });
      }
    });
};

export { postComment, getItemComments };