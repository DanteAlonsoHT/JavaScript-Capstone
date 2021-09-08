const populateBerries = (list) => {
    
    const berriesPage = document.getElementById('berryPage');

    document.getElementById('berriesTitle').innerText = `Showing ${list.length} berries`;
    document.getElementById('berry').innerText =`Berries(${list.length})`

    list.forEach((element, index) => {
       const div = document.createElement('section');
        div.innerHTML = `
        <h4>${element.name}</h4>
        <p>Item ID: ${element.id}</p>
        <p>max harvest: ${element.maxHarvest}</p>
        <div class="d-inline">
            <a class="btn" href="#" id="like-berry-${index}"> like</a>
            <a class="btn" href="#" id="comment-berry-${index}"> comment</a>
            <a class="btn" href="#" id="reserve-berry-${index}"> reserve</a>
        </div>`;
        div.classList.add('block');
        berriesPage.appendChild(div);
        
    });
}

export default populateBerries;