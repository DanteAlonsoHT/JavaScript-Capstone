import gotToCommentPage from './commentPage';
import getLikes from './getLikes';
import sendLike from './sendLike';

const populateItems = (list) => {
  const itemsPage = document.getElementById('itemPage');
  document.getElementById('itemsTitle').innerText = `Showing ${list.length} items`;
  document.getElementById('item').innerText = `Items(${list.length})`;
  list.forEach((element, index) => {
    const div = document.createElement('section');
    div.innerHTML = `
        <img class="card_img" alt="item-${index + 1}" src="${element.sprite}">
        <h4>${element.name}</h4>
        <p>Item ID: ${element.id}</p>
        <p>category: ${element.category}</p>

        
        <div class="d-inline links">
           <a class="btn custom-link" href="#" id="like-item-${index + 1}"> like</a>
          <a class="btn custom-link" href="#" id="comment-item-${index + 1}"> comment</a>
          <a class="btn custom-link" href="#" id="reserve-item-${index + 1}"> reserve</a>
        </div>`;
        div.classList.add('block');       
        itemsPage.appendChild(div);
        getLikes(element.name,`like-item-${index + 1}`);
        const commentLink = document.getElementById(`comment-item-${index + 1}`);
        commentLink.addEventListener('click', (e) => {
          e.preventDefault(); 
          gotToCommentPage(index + 1, 'item', element.name);
        });

        const likeLink = document.getElementById(`like-item-${index + 1}`)
        likeLink.addEventListener('mouseup', (e) => {
          e.preventDefault();
          if (!likeLink.classList.contains('liked')){
            likeLink.classList.add('liked');
            sendLike(element.name);
            getLikes(element.name,`like-item-${index + 1}`);
          };
        });
    });
};

export default populateItems;