/* eslint-disable no-await-in-loop */
import populateBerries from './populateBerries';

const importBerries = async () => {
  const list = [];
  for (let i = 0; i < 18; i += 1) {
    const response = await fetch(`https://pokeapi.co/api/v2/berry/${i + 1}`);
    const obj = await response.json();
    const berry = {};
    berry.name = obj.name;
    berry.id = obj.id;
    berry.maxHarvest = obj.max_harvest;
    list.push(berry);
  }
  populateBerries(list);
};

export default importBerries;