import gotToCommentPage from './commentPage';

const makeItemPage = () => {
    
const itemPage =  document.createElement('article');

itemPage.innerHTML = `
<h2 id="itemsTitle"> Showing 1 item</h2>
<section>

</section>
`;
itemPage.id = 'itemPage';
itemPage.classList.add('d-none');
document.querySelector('main').appendChild(itemPage);
// document.getElementById('comment-item-0').addEventListener('click', (e) => {
//   e.preventDefault();
//   gotToCommentPage(0, 'item');
// });
};

export default makeItemPage;