
const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeWaTSWdgI5EoHhdFxch/comments';

const postComment = async (objName, userName, content) => {
  await fetch(commentURL, {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: objName, username: userName, comment: content }),
    headers: {
        'Content-type': 'application/json',
        
      },
    })
      .then((response) => response)
      .then((json) => console.log(json));
};

const getItemComments = async (objName) => {
  const response = await fetch(commentURL + `?item_id=${objName}`,{
    mode: 'cors',
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      const mainEl = document.querySelector('main');
      const commentUl = document.createElement('ul');
      commentUl.classList.add('comment-list');
      for(let i = 0; i < data.length; i += 1) {
        const commentLi = document.createElement('li');
        commentLi.innerHTML = `${data[i].creation_date} ${data[i].username}: ${data[i].comment}`;
        commentUl.appendChild(commentLi);
      }
      mainEl.appendChild(commentUl);
      const commentCount = Object.keys(data).length;
      return commentCount;
    });
};

export { postComment, getItemComments };