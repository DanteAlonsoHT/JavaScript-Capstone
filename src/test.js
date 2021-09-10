import loadReservations from './__mockReservation__';
import loadComments from './__mockComment__';

describe('For Creating Reservations', () => {
  const initialReservations = [];

  const allReservationsByPokemons = [
    { username: 'Dante Alonso', date_start: '2021-09-09', date_end: '2021-09-10' },
    { date_start: '2021-09-09', username: 'Dante Alonso', date_end: '2021-09-10' },
    { username: 'Dante Alonso', date_start: '2021-09-10', date_end: '2021-09-11' },
    { username: 'Dante Alonso', date_start: '2021-09-22', date_end: '2021-09-23' },
    { username: 'Dante Alonso', date_end: '2021-09-25', date_start: '2021-09-24' },
    { date_start: '2021-10-07', username: 'Dante Alonso', date_end: '2021-10-08' },
  ];

  describe('createReservation method from involvement Reservations', () => {
    test('Empty list is initialized in initialReservations variable', () => {
      expect(initialReservations.length).toEqual(0);
    });

    test('Check the number of allReservationsByPokemons', () => {
      expect(allReservationsByPokemons.length).toEqual(6);
    });

    test('Check the amount returned by loadReservations method', () => {
      const reservationAmount = loadReservations(initialReservations);
      expect(reservationAmount).toEqual(0);
    });

    test('Add a new reservation', () => {
      const newReservation = [{ username: 'Dante Alonso', date_start: '2021-09-09', date_end: '2021-09-10' }];
      initialReservations.push(newReservation);
      const reservationAmount = loadReservations(initialReservations);
      expect(reservationAmount).toEqual(1);
    });

    test('The new reservations persists', () => {
      const reservationAmount = loadReservations(initialReservations);
      expect(reservationAmount).toEqual(1);
    });

    test('Create two reservations more', () => {
      const newReservation2 = { username: 'Dante Alonso', date_start: '2021-09-11', date_end: '2021-09-12' };
      const newReservation3 = { username: 'Dante Alonso', date_start: '2021-09-12', date_end: '2021-09-13' };
      initialReservations.push(newReservation2);
      initialReservations.push(newReservation3);
      const reservationAmount = loadReservations(initialReservations);
      expect(reservationAmount).toEqual(3);
    });

    test('Return an error when the parameter is undefined', () => {
      const reservationNotValid = undefined;
      const reservationAmount = loadReservations(reservationNotValid);
      expect(reservationAmount).toEqual('Error 404: API not found');
    });
  });
});

describe('For Creating Comments', () => {

  const initialComments = [];

  const allCommentsByPokemons = [
    {"username":"Ash Ketchum","creation_date":"2021-09-10","comment":"Great against fire types!"}
    ,{"username":"Professor Oak","creation_date":"2021-09-10","comment":"Well evolved!"}
    ,{"username":"Gary Oak","creation_date":"2021-09-10","comment":"Doesn't stand a chance against my Venusaur!"}
    ,{"username":"Bianca","creation_date":"2021-09-10","comment":"Cute but brutal!"}
    ,{"username":"Brock","creation_date":"2021-09-10","comment":"Awesome!"}
  ];


  describe('createComment method from involvement Comments', () => {
    test('Empty list is initialized in initialComments variable', () => {
      expect(initialComments.length).toEqual(0);
    });

    test('Check the number of allCommentsByPokemons', () => {
      expect(allCommentsByPokemons.length).toEqual(5);
    });

    test('Check the amount returned by loadComments method', () => {
      const commentAmount = loadComments(initialComments);
      expect(commentAmount).toEqual(0);
    });

    test('Add a new comment', () => {
      const newComment = [{"username":"Brock","creation_date":"2021-09-10","comment":"I wonder where I can find one."}];
      initialComments.push(newComment)
      const commentAmount = loadComments(initialComments);
      expect(commentAmount).toEqual(1);
    });

    test('The new comments persists', () => {
      const commentAmount = loadComments(initialComments);
      expect(commentAmount).toEqual(1);
    });

    test('Create two comments more', () => {
      const newComment2 = {"username":"Brock","creation_date":"2021-09-09","comment":"This one seems very rare."};
      const newComment3 = {"username":"Ash Ketchum","creation_date":"2021-09-11","comment":
      "I saw one of these but couldn't catch it"};
      initialComments.push(newComment2);
      initialComments.push(newComment3);
      const commentAmount = loadComments(initialComments);
      expect(commentAmount).toEqual(3);
    });

    test('Return an error when the parameter is undefined', () => {
      const commentNotValid = undefined;
      const commentAmount = loadComments(commentNotValid);
      expect(commentAmount).toEqual("Error 404: API not found");
    });
  });
});