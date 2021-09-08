const populateBerries = (list) => {
    const berriesPage = document.getElementById('berryPage');
    document.getElementById('berriesTitle').innerText = 'Showing 10 berries';
    list.forEach((element, index) => {
       let div = document.createElement('section');
        div.innerHTML = `
        <h4>${element.name}</h4>
        <p>Item ID: ${element.id}</p>
        <p>max harvest: ${element.maxHarvest}</p>
 
        <a class="btn" href="#" id="like-berry-${index}"> like</a>
        <a class="btn" href="#" id="comment-berry-${index}"> comment</a>
        <a class="btn" href="#" id="reserve-berry-${index}"> reserve</a>
        `
        
        berriesPage.appendChild(div);
    });
}

export default populateBerries;