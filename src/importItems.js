/* eslint-disable no-await-in-loop */
import populateItems from './populateItems';

const importItems = async () => {
  const list = [];

  for (let i = 0; i < 19; i += 1) {
    const response = await fetch(`https://pokeapi.co/api/v2/item/${i + 1}`);
    const obj = await response.json();
    const item = {};
    item.name = obj.name;
    item.id = obj.id;
    item.category = obj.category.name;
    item.sprite = obj.sprites.default;
    list.push(item);
  }
  populateItems(list);
};

export default importItems;