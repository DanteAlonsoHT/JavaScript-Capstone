const idInvolvementAPI = 'WeWaTSWdgI5EoHhdFxch';

const urlAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idInvolvementAPI}/reservations`;

const loadReservations = async (itemId) => {
  const response = await fetch(`${urlAPI}?itemId=${itemId}`);
  const result = await response.json();
  const reservationsHTML = document.getElementById(`list-${itemId}`);
  const reservationTitle = document.getElementById(`totalReservation-${itemId}`);
  let totalReservations = 0;
  reservationsHTML.innerHTML = '';
  if (result[0] !== undefined) {
    result.forEach((reservation, index) => {
      reservationsHTML.innerHTML += `<li id="listElement-${itemId}-${index + 1}}">${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</li>`;
      totalReservations = index + 1;
      reservationTitle.textContent = `Reservations (${totalReservations})`;
    });
  } else {
    reservationTitle.textContent = 'Reservations (0)';
  }
  return totalReservations;
};

const createReservation = async (typeObj, idObj) => {
  const itemId = `${typeObj}-${idObj}`;
  const authorName = document.getElementById(`yourNameTextId-${typeObj}-${idObj}`).value;
  const startDate = document.getElementById(`startDateId-${typeObj}-${idObj}`).value;
  const endDate = document.getElementById(`endDateId-${typeObj}-${idObj}`).value;
  await fetch(urlAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(
      {
        item_id: itemId,
        username: authorName,
        date_start: startDate,
        date_end: endDate,
      },
    ),
  })
    .then((response) => {
      loadReservations(`${typeObj}-${idObj}`);
      response.text();
    })
    .then((messages) => { console.log(messages); });
};

export { createReservation, loadReservations };