const populatePokemon = (list) => {
    const pokePage = document.getElementById('pokePage');
    document.getElementById('pokeTitle').innerText = 'Showing 10 pokemon';
    list.forEach((element, index)=> {
       let div = document.createElement('section');
        div.innerHTML = `
        <img class="card_img" alt="pokemon-${index}" src="${element.sprite}">
        <h4>${element.name}</h4>
        <p>Pokedex ID: ${element.id}</p>
        <p>Weight: ${element.weight}</p>
        <p>Height: ${element.height}</p>
 
        <a class="btn" href="#" id="like-pokemon-${index}"> like</a>
        <a class="btn" href="#" id="comment-pokemon-${index}"> comment</a>
        <a class="btn" href="#" id="reserve-pokemon-${index}"> reserve</a>
        `
        
        pokePage.appendChild(div);
    });
}

export default populatePokemon;