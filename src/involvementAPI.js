
const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/javascriptCapstoneAPI-DJY/comments';

// const getAppID = async () => {
//   const response = fetch(requestURL, {
//       mode: 'cors',
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//   const app = await response.json();
//   console.log(app);
// };

// export { getAppID };

const postComment = async (objName, userName, content) => {
  await fetch(commentURL + `?item_id=${objName}`, {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: userName, comment: content }),
    }).then((response) => response.json());
};

export { postComment };