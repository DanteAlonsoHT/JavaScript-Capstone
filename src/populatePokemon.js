import gotToCommentPage from './commentPage';

const populatePokemon = (list) => {
    const pokePage = document.getElementById('pokePage');
    document.getElementById('pokeTitle').innerText = 'Showing 20 pokemon';
    list.forEach(element => {
        let div = document.createElement('section');
        div.innerHTML = `
        <h4>${element.name}</h4>
        <p>Pokedex ID: ${element.id}</p>
        <p>Weight: ${element.weight}</p>
        <p>Height: ${element.height}</p>`;
        const likeLink = document.createElement('a');
        likeLink.classList.add('btn');
        likeLink.id = `like-pokemon-${element.id}`;
        const commentLink = document.createElement('a');
        commentLink.classList.add('btn');
        commentLink.id = `comment-pokemon-${element.id}`;
        commentLink.addEventListener('click', (e) => {
          e.preventDefault(); 
          gotToCommentPage(element.id, 'pokemon');
        });
        const reserveLink = document.createElement('a');
        reserveLink.classList.add('btn');
        reserveLink.id = `reserve-pokemon-${element.id}`;
        div.appendChild(likeLink);
        div.appendChild(commentLink);
        div.appendChild(reserveLink);
        pokePage.appendChild(div);
    });
}

export default populatePokemon;