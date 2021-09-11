const idInvolvementAPI = 'WeWaTSWdgI5EoHhdFxch';

const urlAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idInvolvementAPI}/reservations`;

const reservationCounter = (result, itemId, reservationsHTML) => {
  let totalReservations = 0;
  let reservationTitleAfterCounter = '';
  if (result[0] !== undefined) {
    result.forEach((reservation, index) => {
      reservationsHTML.innerHTML += `<li id="listElement-${itemId}-${index + 1}}">${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</li>`;
      totalReservations = index + 1;
      reservationTitleAfterCounter = `Reservations (${totalReservations})`;
    });
  } else {
    reservationTitleAfterCounter = 'Reservations (0)';
  }
  return reservationTitleAfterCounter;
};

const loadReservations = async (itemId) => {
  const response = await fetch(`${urlAPI}?item_id=${itemId}`);
  const result = await response.json();
  const reservationsHTML = document.getElementById(`list-${itemId}`);
  const reservationTitle = document.getElementById(`totalReservation-${itemId}`);
  reservationsHTML.innerHTML = '';
  reservationTitle.textContent = '';
  reservationTitle.textContent = reservationCounter(result, itemId, reservationsHTML);
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
    });
};

export { createReservation, loadReservations };
