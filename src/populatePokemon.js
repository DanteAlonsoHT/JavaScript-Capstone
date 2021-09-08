import gotToCommentPage from './commentPage';

const populatePokemon = (list) => {
    const pokePage = document.getElementById('pokePage');
    document.getElementById('pokeTitle').innerText = 'Showing 10 pokemon';
    list.forEach((element, index)=> {
       let div = document.createElement('section');
        div.innerHTML = `
        <img class="card_img" alt="pokemon-${index}" src="${element.sprite}">
        <h4>${element.name}</h4>
        <p>Pokedex ID: ${index}</p>
        <p>Weight: ${element.weight}</p>
        <p>Height: ${element.height}</p>`;
        const likeLink = document.createElement('a');
        likeLink.classList.add('btn');
        likeLink.id = `like-pokemon-${index}`;
        const commentLink = document.createElement('a');
        commentLink.classList.add('btn');
        commentLink.id = `comment-pokemon-${index}`;
        commentLink.addEventListener('click', (e) => {
          e.preventDefault(); 
          gotToCommentPage(index, 'pokemon');
        });
        const reserveLink = document.createElement('a');
        reserveLink.classList.add('btn');
        reserveLink.id = `reserve-pokemon-${index}`;
        div.appendChild(likeLink);
        div.appendChild(commentLink);
        div.appendChild(reserveLink);
        pokePage.appendChild(div);
    });
}

export default populatePokemon;