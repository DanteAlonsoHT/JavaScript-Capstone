import gotToCommentPage from './commentPage';

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
 
        <a class="btn" href="#" id="like-berry-${index + 1}"> like</a>
        <a class="btn" href="#" id="comment-berry-${index + 1}"> comment</a>
        <a class="btn" href="#" id="reserve-berry-${index + 1}"> reserve</a>`;
        div.classList.add('block');
        berriesPage.appendChild(div);
        const commentLink = document.getElementById(`comment-berry-${index + 1}`);
        commentLink.addEventListener('click', (e) => {
          e.preventDefault();
          gotToCommentPage(index + 1, 'berry', element.name);
        });
    });
}

export default populateBerries;