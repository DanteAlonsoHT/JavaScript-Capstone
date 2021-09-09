const sendLike = async (objName) => {
    let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/javascriptCapstoneAPI-DJY/likes/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({item_id: objName})
      });
}

export default sendLike;