const getLikes = async (objName, likeID) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeWaTSWdgI5EoHhdFxch/likes');
  const obj = await response.json();
  let list = obj.filter((like) => like.item_id === objName);
  if (list.length < 1) { list = [{ likes: 0 }]; }
  document.getElementById(likeID).innerHTML = `like(${list[0].likes})`;
};
export default getLikes;