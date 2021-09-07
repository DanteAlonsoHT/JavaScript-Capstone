import gotToCommentPage from './commentPage';

const makeBerryPage = () => {const berryPage =  document.createElement('article');

berryPage.innerHTML = `
<h2> Showing 1 berry</h2>
<section>
    <h4>pecha-berry</h4>
    <p>ID: 3</p>
    <p>Growth time: 3</p>
    
    <a class="btn" href="#" id="like-0"> like</a>
    <a class="btn" href="#" id="comment-0"> comment</a>
    <a class="btn" href="#" id="reserve-0"> reserve</a>
    
</section>
`;
berryPage.id = 'berryPage';
berryPage.classList.add('d-none');
document.querySelector('main').appendChild(berryPage);
document.getElementById('comment-0').addEventListener('click', gotToCommentPage(0, 'berry'));
}

export default makeBerryPage();