import populateBerries from "./populateBerries";

const importBerries = async () =>{

const list = []


for (let i = 0; i<10 ; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/berry/${i+1}`);
    let obj = await response.json();
    let  berry = new Object();
    berry.name = obj.name;
    berry.id = obj.id;
    berry.maxHarvest = obj.max_harvest;
    list.push(berry);
}

console.log(list);
populateBerries(list);
}

export default importBerries;