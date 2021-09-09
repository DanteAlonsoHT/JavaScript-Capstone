import importBerries from './importBerries';

const makeBerryPage = () => {

const berryPage =  document.createElement('article');

berryPage.innerHTML = `
<h2 id="berriesTitle"> Showing 10 berries</h2>
<section id="berryPage" class="d-flex flex-wrap">
    
</section>`;

berryPage.id = 'berry-article';
berryPage.classList.add('d-none');
document.querySelector('main').appendChild(berryPage);
importBerries();
};

export default makeBerryPage;