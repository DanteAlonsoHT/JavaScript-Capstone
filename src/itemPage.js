import importItems from './importItems';

const makeItemPage = () => {
    
const itemPage =  document.createElement('article');

itemPage.innerHTML = `
<h2 id="itemsTitle"> Showing 10 items</h2>
<section>

</section>
`;
itemPage.id = 'itemPage';
itemPage.classList.add('d-none');
document.querySelector('main').appendChild(itemPage);
importItems();
};

export default makeItemPage;