const populateItems = (list) => {
    const itemsPage = document.getElementById('itemPage');
    document.getElementById('itemsTitle').innerText = `Showing ${list.length} items`;
    document.getElementById('item').innerText =`Items(${list.length})`
    list.forEach((element, index) => {
       let div = document.createElement('section');
        div.innerHTML = `
        <img class="card_img" alt="item-${index}" src="${element.sprite}">
        <h4>${element.name}</h4>
        <p>Item ID: ${element.id}</p>
        <p>category: ${element.category}</p>
        
        <div class="d-inline">
            <a class="btn" href="#" id="like-item-${index}"> like</a>
            <a class="btn" href="#" id="comment-item-${index}"> comment</a>
            <a class="btn" href="#" id="reserve-item-${index}"> reserve</a>
        </div>`;
        div.classList.add('block');
        itemsPage.appendChild(div);
    });
}

export default populateItems;