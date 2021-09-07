
const makeBerryPage = () => {const itemPage =  document.createElement('article');

berryPage.innerHTML = `
<h2> Showing 1 berry</h2>
<section>
    <h4>pecha-berry</h4>
    <p>ID: 3</p>
    <p>Growth time: 3</p>
    
    <a class="btn" href="#"> like</a>
    <a class="btn" href="#"> comment</a>
    <a class="btn" href="#"> reserve</a>
    
</section>
`;
berryPage.classList.add('invisible');
document.querySelector('main').appendChild(berryPage);
}

export default makeBerryPage();