import gotToCommentPage from './commentPage';

const makeItemPage = () => {
    
const itemPage =  document.createElement('article');

itemPage.innerHTML = `
<h2> Showing 1 item</h2>
<section>
    <h4>Great ball</h4>
    <p>ID: 3</p>
    <p>category: pokeball</p>

    <a class="btn" href="#" id="like-item-0"> like</a>
    <a class="btn" href="#" id="comment-item-0"> comment</a>
    <a class="btn" href="#" id="reserve-item-0"> reserve</a>
    
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