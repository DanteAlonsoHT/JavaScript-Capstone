const loadComments = (result) => {
  let totalComments = 0;
  if (result !== undefined) {
    result.forEach((value, index) => {
      totalComments = index + 1;
    });
  } else {
    return 'Error 404: API not found';
  }
  return totalComments;
};

export default loadComments;