const loadComments = (result) => {
    let lastValue = '';
    let totalComments = 0;
    if (result !== undefined){
        result.forEach((value, index) => {
          lastValue = value;
          totalComments = index + 1;
        });
    }
    else {
        return "Error 404: API not found"
    }
    return lastValue, totalComments;
};

export default loadComments;