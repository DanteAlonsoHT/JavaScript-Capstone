const sendLike = async (objName) => {
    let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeWaTSWdgI5EoHhdFxch/likes/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({item_id: objName})
      });
}

export default sendLike;