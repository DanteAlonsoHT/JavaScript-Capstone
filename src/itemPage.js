import importItems from './importItems';

const makeItemPage = () => {
    
const itemPage =  document.createElement('article');

itemPage.innerHTML = `
<h2 id="itemsTitle"> Showing x item</h2>
<section id="itemPage" class="d-flex flex-wrap">

</section>`;
itemPage.id = 'item-article'
itemPage.classList.add('d-none');

document.querySelector('main').appendChild(itemPage);
importItems();
};

export default makeItemPage;