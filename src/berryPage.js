import gotToCommentPage from './commentPage';

const makeBerryPage = () => {

const berryPage =  document.createElement('article');

berryPage.innerHTML = `
<h2 id="berriesTitle"> Showing 1 berry</h2>
<section>
    
</section>
`;
berryPage.id = 'berryPage';
berryPage.classList.add('d-none');
document.querySelector('main').appendChild(berryPage);
document.getElementById('comment-berry-0').addEventListener('click', (e) => {
  e.preventDefault();
  gotToCommentPage(0, 'berry');
});
};

export default makeBerryPage;