const loadReservations = (result) => {
    let lastValue = '';
    let totalReservations = 0;
    if (result !== undefined){
        result.forEach((value, index) => {
          lastValue = value;
          totalReservations = index + 1;
        });
    }
    else {
        return "Error 404: API not found"
    }
    return lastValue, totalReservations;
};

export default loadReservations;