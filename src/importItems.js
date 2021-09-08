import populateItems from "./populateItems";

const importItems = async () =>{

const list = []


for (let i = 0; i<19 ; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/item/${i+1}`);
    let obj = await response.json();
    let  item = new Object();
    item.name = obj.name;
    item.id = obj.id;
    item.category = obj.category.name;
    item.sprite = obj.sprites.default;
    list.push(item);
}

console.log(list);
populateItems(list);
}

export default importItems;