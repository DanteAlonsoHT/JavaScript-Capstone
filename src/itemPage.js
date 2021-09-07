
const makeItemPage = () => {const itemPage =  document.createElement('article');

itemPage.innerHTML = `
<h2> Showing 1 item</h2>
<section>
    <h4>Great ball</h4>
    <p>ID: 3</p>
    <p>category: pokeball</p>

    <a class="btn" href="#"> like</a>
    <a class="btn" href="#"> comment</a>
    <a class="btn" href="#"> reserve</a>
    
</section>
`;
itemPage.classList.add('invisible');
document.querySelector('main').appendChild(itemPage);
}

export default makeItemPage();