import gotToCommentPage from './commentPage';

const populateItems = (list) => {
    const itemsPage = document.getElementById('itemPage');
    document.getElementById('itemsTitle').innerText = 'Showing 10 items';
    list.forEach((element, index) => {
       let div = document.createElement('section');
        div.innerHTML = `
        <img class="card_img" alt="item-${index + 1}" src="${element.sprite}">
        <h4>${element.name}</h4>
        <p>Item ID: ${element.id}</p>
        <p>category: ${element.category}</p>
 
        <a class="btn" href="#" id="like-item-${index + 1}"> like</a>
        <a class="btn" href="#" id="comment-item-${index + 1}"> comment</a>
        <a class="btn" href="#" id="reserve-item-${index + 1}"> reserve</a>`;
        itemsPage.appendChild(div);
        const commentLink = document.getElementById(`comment-item-${index + 1}`);
        commentLink.addEventListener('click', (e) => {
            e.preventDefault(); 
            gotToCommentPage(index + 1, 'item');
        });
    });
}

export default populateItems;