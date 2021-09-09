const getLikes = async (objName, likeID) => {
    let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/javascriptCapstoneAPI-DJY/likes`);
    if(!response.ok){return}
    let obj = await response.json();
    let list = obj.filter(like => like.item_id === objName);
    document.getElementById(likeID).innerHTML = `like(${list[0].likes})`
}
export default getLikes;