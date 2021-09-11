import { createReservation } from './involvementReservationAPI';

const displayReservationById = async (typeObj, idObj) => {
  const pokemonContent = document.getElementById('pokePage');
  const itemContent = document.getElementById('itemPage');
  const berryContent = document.getElementById('berryPage');

  const list = [];
  let description = '';

  const response = await fetch(`https://pokeapi.co/api/v2/${typeObj}/${idObj}`);
  const obj = await response.json();

  if (typeObj === 'pokemon') {
    const pokemon = {};
    pokemon.name = obj.name;
    pokemon.id = obj.id;
    pokemon.weight = obj.weight;
    pokemon.height = obj.height;
    pokemon.sprite = obj.sprites.front_default;
    list.push(pokemon);
    description = `
        <img class="card_img" alt="pokemon-${pokemon.id}" src="${pokemon.sprite}">
        <h6>${pokemon.name}</h6>
        <p>Pokedex ID: ${pokemon.id}</p>
        <div class="d-flex">
            <p class="me-3">Weight: ${pokemon.weight}</p>
            <p class="ms-3">Height: ${pokemon.height}</p>
        </div>
        `;
  } else if (typeObj === 'item') {
    const item = {};
    item.name = obj.name;
    item.id = obj.id;
    item.category = obj.category.name;
    item.sprite = obj.sprites.default;
    list.push(item);
    description = `
        <img class="card_img" alt="item-${item.id}" src="${item.sprite}">
        <h6>${item.name}</h6>
        <div class="d-flex">
            <p class="me-3">Item ID: ${item.id}</p>
            <p class="ms-3">category: ${item.category}</p>
        </div>
        `;
  } else if (typeObj === 'berry') {
    const berry = {};
    berry.name = obj.name;
    berry.id = obj.id;
    berry.maxHarvest = obj.max_harvest;
    list.push(berry);
    description = `
        <h6>${berry.name}</h6>
        <div class="d-flex">
            <p class="me-3">Item ID: ${berry.id}</p>
            <p class="ms-3">max harvest: ${berry.maxHarvest}</p>
        </div>
        `;
  }

  list.forEach(() => {
    const div = document.createElement('section');
    div.className = `currentSection-${typeObj}-${idObj} reservationSection`;
    div.innerHTML = `${description}
         <div>
         <a class="btn" href="#" id="like-${typeObj}-${idObj}"> like</a>
         <a class="btn" href="#" id="comment-${typeObj}-${idObj}"> comment</a>
         <a class="btn" href="#" id="reserve-${typeObj}-${idObj}"> reserve</a>
         </div>

         <h5 id="totalReservation-${typeObj}-${idObj}">Reservations ()</h5>
         <ul id="list-${typeObj}-${idObj}">
         </ul>

         <form id="formReservation-${typeObj}-${idObj}">
            <label for="yourNameText-${typeObj}-${idObj}">Your Name</label>
            <input type="text" id="yourNameTextId-${typeObj}-${idObj}" name="yourNameText-${typeObj}-${idObj}" class="form-control" required>
            <label for="startDate-${typeObj}-${idObj}">Start Date</label>
            <input type="date" id="startDateId-${typeObj}-${idObj}" name="startDate-${typeObj}-${idObj}" class="form-control" required>
            <label for="endDate-${typeObj}-${idObj}">End Date</label>
            <input type="date" id="endDateId-${typeObj}-${idObj}" name="endDate-${typeObj}-${idObj}" class="form-control" required>
            <button type="submit" id="submitReserve-${typeObj}-${idObj}" class="btn btn-outline-danger">Submit</button>
         </form>
         `;
    if (typeObj === 'pokemon') {
      pokemonContent.appendChild(div);
    } else if (typeObj === 'item') {
      itemContent.appendChild(div);
    } else if (typeObj === 'berry') {
      berryContent.appendChild(div);
    }

    document.querySelector(`.currentSection-${typeObj}-${idObj}`).addEventListener('click', (ev) => {
      if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
        if (ev.target.id.includes('submitReserve')) {
          const itemId = `${typeObj}-${idObj}`;
          const authorName = document.getElementById(`yourNameTextId-${typeObj}-${idObj}`).value;
          const startDate = document.getElementById(`startDateId-${typeObj}-${idObj}`).value;
          const endDate = document.getElementById(`endDateId-${typeObj}-${idObj}`).value;
          if (itemId && authorName && startDate && endDate) {
            ev.preventDefault();
            createReservation(typeObj, idObj);
          }
        }
      }
    });
    document.querySelector('main').addEventListener('click', (ev) => {
      const attrId = ev.target.getAttribute('id');
      if (((attrId === 'pokePage') || (attrId === 'itemPage') || (attrId === 'berryPage'))
            && (document.querySelector(`.currentSection-${typeObj}-${idObj}`))) {
        document.querySelector(`.currentSection-${typeObj}-${idObj}`).remove();
      }
    });
  });
};

export default displayReservationById;