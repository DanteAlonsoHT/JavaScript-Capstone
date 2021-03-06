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
      <div class="container w-50 d-flex links px-4">
          <h4>${element.name}</h4>
      </div>
        <p>Item ID: ${element.id}</p>
        <p>max harvest: ${element.maxHarvest}</p>
        <p class="container w-50 text-end" id="like-berry-${index + 1}-counter"></p>
        <div class="d-inline links">
          <a class="btn btn-outline-light" href="#" id="like-berry-${index + 1}">like</a>
          <a class="btn btn-outline-light" href="#" id="comment-berry-${index + 1}"> comment</a>
          <a class="btn btn-outline-light" href="#" id="reserve-berry-${index + 1}"> reserve</a>
        </div>`;

    div.classList.add('block');
    berriesPage.appendChild(div);
    const commentLink = document.getElementById(`comment-berry-${index + 1}`);
    commentLink.addEventListener('click', (e) => {
      e.preventDefault();
      gotToCommentPage(index + 1, 'berry', element.name);
    });
    getLikes(element.name, `like-berry-${index + 1}-counter`);

    const likeLink = document.getElementById(`like-berry-${index + 1}`);
    likeLink.addEventListener('mouseup', (e) => {
      if (!likeLink.classList.contains('liked')) {
        e.preventDefault();
        likeLink.classList.add('liked');
        sendLike(element.name);
        getLikes(element.name, `like-berry-${index + 1}-counter`);
      }
    });
  });
};

export default populateBerries;