import gotToCommentPage from './commentPage';
import getLikes from './getLikes';
import sendLike from './sendLike';

const populateBerries = (list) => {
  const berriesPage = document.getElementById('berryPage');

  document.getElementById('berriesTitle').innerText = `Showing ${list.length} berries`;
  document.getElementById('berry').innerText = `Berries(${list.length})`;

  list.forEach((element, index) => {
    const div = document.createElement('section');
    div.innerHTML = `
        <h4>${element.name}</h4>
        <p>Item ID: ${element.id}</p>
        <p>max harvest: ${element.maxHarvest}</p>
        <div class="d-inline links">
          <a class="btn custom-link" href="#" id="like-berry-${index + 1}"> like</a>
          <a class="btn custom-link" href="#" id="comment-berry-${index + 1}"> comment</a>
          <a class="btn custom-link" href="#" id="reserve-berry-${index + 1}"> reserve</a>
        </div>`;

        div.classList.add('block');
        berriesPage.appendChild(div);
        getLikes(element.name,`like-berry-${index + 1}`);
        const commentLink = document.getElementById(`comment-berry-${index + 1}`);
        commentLink.addEventListener('click', (e) => {
          e.preventDefault();
          gotToCommentPage(index + 1, 'berry');
        });

        const likeLink = document.getElementById(`like-berry-${index + 1}`)
        likeLink.addEventListener('mouseup', (e) => {
          e.preventDefault();
          if (!likeLink.classList.contains('liked')){
            likeLink.classList.add('liked');
            sendLike(element.name);
            getLikes(element.name,`like-berry-${index + 1}`);
          };
        });

    });
}

export default populateBerries;