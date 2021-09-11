const importLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/abc234/likes');
  const obj = await response.json();
  console.log(obj);
};

export default importLikes;

// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/javascriptCapstoneAPI-DJY/reservations

/*
{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin
    , origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin
    , unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }
*/