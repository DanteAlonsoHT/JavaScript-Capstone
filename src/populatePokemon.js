const populatePokemon = (list) => {
    const pokePage = document.getElementById('pokePage');
    document.getElementById('pokeTitle').innerText = 'Showing 20 pokemon';
    list.forEach(element => {
       let div = document.createElement('section');
        div.innerHTML = `
        <h4>${element.name}</h4>
        <p>Pokedex ID: ${element.id}</p>
        <p>Weight: ${element.weight}</p>
        <p>Height: ${element.height}</p>
 
        <a class="btn" href="#" id="like-pokemon-0"> like</a>
        <a class="btn" href="#" id="comment-pokemon-0"> comment</a>
        <a class="btn" href="#" id="reserve-pokemon-0"> reserve</a>
        `
        
        pokePage.appendChild(div);
    });
}

export default populatePokemon;