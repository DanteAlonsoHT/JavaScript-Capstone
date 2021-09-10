import { createReservation } from './involvementReservationAPI';

const displayReservationById = async (type_obj, id_obj) => {

    const pokemonContent = document.getElementById("pokePage");
    const itemContent = document.getElementById("itemPage");
    const berryContent = document.getElementById("berryPage");

    let list = []
    let description = '';

    let response = await fetch(`https://pokeapi.co/api/v2/${type_obj}/${id_obj}`);
    let obj = await response.json();

    if (type_obj === "pokemon"){
        let  pokemon = new Object();
        pokemon.name = obj.name;
        pokemon.id = obj.id;
        pokemon.weight = obj.weight;
        pokemon.height = obj.height;
        pokemon.sprite = obj.sprites.front_default;
        list.push(pokemon);
        description = `
        <img class="card_img" alt="pokemon-${pokemon.id}" src="${pokemon.sprite}">
        <h4>${pokemon.name}</h4>
        <p>Pokedex ID: ${pokemon.id}</p>
        <div class="d-flex">
            <p class="me-3">Weight: ${pokemon.weight}</p>
            <p class="ms-3">Height: ${pokemon.height}</p>
        </div>
        `;
    }
    else if (type_obj === "item"){
        let  item = new Object();
        item.name = obj.name;
        item.id = obj.id;
        item.category = obj.category.name;
        item.sprite = obj.sprites.default;
        list.push(item);
        description = `
        <img class="card_img" alt="item-${item.id}" src="${item.sprite}">
        <h4>${item.name}</h4>
        <div class="d-flex">
            <p class="me-3">Item ID: ${item.id}</p>
            <p class="ms-3">category: ${item.category}</p>
        </div>
        `;
    }
    else if (type_obj === "berry"){
        let  berry = new Object();
        berry.name = obj.name;
        berry.id = obj.id;
        berry.maxHarvest = obj.max_harvest;
        list.push(berry);
        description = `
        <h4>${berry.name}</h4>
        <div class="d-flex">
            <p class="me-3">Item ID: ${berry.id}</p>
            <p class="ms-3">max harvest: ${berry.maxHarvest}</p>
        </div>
        `;
    }

    list.forEach(() => {
        let div = document.createElement('section');
        div.className = `currentSection-${type_obj}-${id_obj} reservationSection`;
         div.innerHTML = description+`
         <div>
         <a class="btn" href="#" id="like-${type_obj}-${id_obj}"> like</a>
         <a class="btn" href="#" id="comment-${type_obj}-${id_obj}"> comment</a>
         <a class="btn" href="#" id="reserve-${type_obj}-${id_obj}"> reserve</a>
         </div>

         <h3 id="totalReservation-${type_obj}-${id_obj}">Reservations ()</h3>
         <ul id="list-${type_obj}-${id_obj}">
         </ul>

         <form id="formReservation-${type_obj}-${id_obj}">
            <label for="yourNameText-${type_obj}-${id_obj}">Your Name</label>
            <input type="text" id="yourNameTextId-${type_obj}-${id_obj}" name="yourNameText-${type_obj}-${id_obj}" class="form-control" required>
            <label for="startDate-${type_obj}-${id_obj}">Start Date</label>
            <input type="date" id="startDateId-${type_obj}-${id_obj}" name="startDate-${type_obj}-${id_obj}" class="form-control" required>
            <label for="endDate-${type_obj}-${id_obj}">End Date</label>
            <input type="date" id="endDateId-${type_obj}-${id_obj}" name="endDate-${type_obj}-${id_obj}" class="form-control" required>
            <button type="submit" id="submitReserve-${type_obj}-${id_obj}" class="btn btn-outline-danger">Submit</button>
         </form>
         `
        if (type_obj === "pokemon"){
            pokemonContent.appendChild(div);
        }
        else if (type_obj === "item"){
            itemContent.appendChild(div);
        }
        else if (type_obj === "berry"){
            berryContent.appendChild(div);
        }

        document.querySelector(`.currentSection-${type_obj}-${id_obj}`).addEventListener('click', (ev) => {
            if (ev.target !== null && ev.target !== 'NaN' && ev.target !== '') {
                if (ev.target.id.includes("submitReserve")) {
                    const itemId = type_obj+'-'+id_obj;
                    const authorName = document.getElementById(`yourNameTextId-${type_obj}-${id_obj}`).value;
                    const startDate = document.getElementById(`startDateId-${type_obj}-${id_obj}`).value;
                    const endDate = document.getElementById(`endDateId-${type_obj}-${id_obj}`).value;
                    if (itemId && authorName && startDate && endDate){
                        ev.preventDefault();
                        createReservation(type_obj, id_obj);
                        console.log("Save it")
                    }
                }
            }
        });
        document.querySelector('main').addEventListener('click', (ev) => {
            const attrId = ev.target.getAttribute('id');
            console.log(attrId);
            if ((attrId === 'pokePage') || (attrId === 'itemPage') || (attrId === 'berryPage')
            && document.querySelector(`.currentSection-${type_obj}-${id_obj}`)){
                document.querySelector(`.currentSection-${type_obj}-${id_obj}`).remove();
            }
        });
     });
};

export default displayReservationById;