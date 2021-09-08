import populatePokemon from "./populatePokemon";

const importPokemon = async () =>{

const list = []


for (let i = 0; i<10 ; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`);
    let obj = await response.json();
    let  pokemon = new Object();
    pokemon.name = obj.name;
    pokemon.id = obj.id;
    pokemon.weight = obj.weight;
    pokemon.height = obj.height;
    pokemon.sprite = obj.sprites.front_default;
    list.push(pokemon);
}

console.log(list);
populatePokemon(list);



//   const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
//   const list = await response.json();
//     console.log(list);

}

export default importPokemon;