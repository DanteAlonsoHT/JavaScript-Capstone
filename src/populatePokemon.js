import gotToCommentPage from './commentPage';

const populatePokemon = (list) => {
    const pokePage = document.getElementById('pokePage');
    document.getElementById('pokeTitle').innerText = 'Showing 10 pokemon';
    list.forEach((element, index)=> {
       let div = document.createElement('section');
        div.innerHTML = `
        <img class="card_img" alt="pokemon-${index + 1}" src="${element.sprite}">
        <h4>${element.name}</h4>
        <p>Pokedex ID: ${index + 1}</p>
        <p>Weight: ${element.weight}</p>
        <p>Height: ${element.height}</p>
        <a class="btn" href="#" id="like-pokemon-${index + 1}"> like</a>
        <a class="btn" href="#" id="comment-pokemon-${index + 1}"> comment</a>
        <a class="btn" href="#" id="reserve-pokemon-${index + 1}"> reserve</a>`;
        pokePage.appendChild(div);
        const commentLink = document.getElementById(`comment-pokemon-${index + 1}`);
        commentLink.addEventListener('click', (e) => {
          e.preventDefault(); 
          gotToCommentPage(index + 1, 'pokemon');
        });
    });
}

export default populatePokemon;