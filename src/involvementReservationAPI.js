const idInvolvementAPI = `WeWaTSWdgI5EoHhdFxch`;

const urlAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idInvolvementAPI}/reservations`;


const loadReservations = async (item_id) => {
   const response = await fetch(urlAPI+`?item_id=${item_id}`);
   const result = await response.json();
   let reservationsHTML = document.getElementById(`list-${item_id}`);
   let reservationTitle = document.getElementById(`totalReservation-${item_id}`)
   let totalReservations = 0;
   reservationsHTML.innerHTML = '';
   console.log(result[0])
   if (result[0] !== undefined){
      result.forEach((reservation, index) => {
         reservationsHTML.innerHTML += `<li id="listElement-${item_id}-${index + 1}}">${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</li>`
         totalReservations = index + 1;
         reservationTitle.textContent = `Reservations (${totalReservations})`;
      });
   }
   else {
      reservationTitle.textContent = `Reservations (0)`;
   }
   return totalReservations;
};

const createReservation = async (type_obj, id_obj) => {
   const itemId = type_obj+'-'+id_obj;
   const authorName = document.getElementById(`yourNameTextId-${type_obj}-${id_obj}`).value;
   const startDate = document.getElementById(`startDateId-${type_obj}-${id_obj}`).value;
   const endDate = document.getElementById(`endDateId-${type_obj}-${id_obj}`).value;
   await fetch(urlAPI, {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
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
      console.log(response);
      document.getElementById(`formReservation-${type_obj}-${id_obj}`).reset;
      loadReservations(`${type_obj}-${id_obj}`)
      response.text();
   })
    .then((messages) => {console.log(messages);});
 };

export {createReservation, loadReservations};