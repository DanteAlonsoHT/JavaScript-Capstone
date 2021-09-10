const loadReservations = (result) => {
  let totalReservations = 0;
  if (result !== undefined) {
    result.forEach((value, index) => {
      totalReservations = index + 1;
    });
  } else {
    return 'Error 404: API not found';
  }
  return totalReservations;
};

export default loadReservations;