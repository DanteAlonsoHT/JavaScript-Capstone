import gotToCommentPage from './commentPage';
import getLikes from './getLikes';
import sendLike from './sendLike';

const populatePokemon = (list) => {
  const pokePage = document.getElementById('pokePage');

  document.getElementById('pokeTitle').innerText = `Showing ${list.length} pokemon`;
  document.getElementById('poke').innerText = `Pokemon(${list.length})`;

  list.forEach((element, index) => {
    const div = document.createElement('section');
    div.innerHTML = `
        <img class="card_img" alt="pokemon-${index + 1}" src="${element.sprite}">
        <div class="container w-50 d-flex links px-4">
          <h4>${element.name}</h4>
          <a class="btn custom-link fix" href="#" id="like-pokemon-${index + 1}"> like</a>
        
        </div>
          <p>Pokedex ID: ${index + 1}</p>
          <p>Weight: ${element.weight}</p>
          <p>Height: ${element.height}</p>
          <p class="container w-50 text-end" id="like-pokemon-${index + 1}-counter"></p>
        <div class="d-inline links">   
          <a class="btn custom-link " href="#" id="comment-pokemon-${index + 1}"> comment</a>
          <a class="btn custom-link " href="#" id="reserve-pokemon-${index + 1}"> reserve</a>
        </div>`;

    div.classList.add('d-flex', 'flex-column', 'align-items-center', 'block');
    pokePage.appendChild(div);
    getLikes(element.name, `like-pokemon-${index + 1}-counter`);

    const commentLink = document.getElementById(`comment-pokemon-${index + 1}`);
    commentLink.addEventListener('click', (e) => {
      e.preventDefault();
      gotToCommentPage(index + 1, 'pokemon', element.name);
    });

    const likeLink = document.getElementById(`like-pokemon-${index + 1}`);
    likeLink.addEventListener('mouseup', (e) => {
      e.preventDefault();
      if (!likeLink.classList.contains('liked')) {
        likeLink.classList.add('liked');
        sendLike(element.name);
        getLikes(element.name, `like-pokemon-${index + 1}-counter`);
      }
    });
  });
};

export default populatePokemon;