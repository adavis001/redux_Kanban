const cardsFromFakeDB = [{
      id: 1,
      title : 'Order Pizza',
      priority : 'Medium',
      status: 'Done',
      createdBy: 'Alexander Davis',
      assignedTo: 'Ernest Tsang'
    },
    {
      id: 2,
      title : 'Eat Pizza',
      priority : 'High',
      status: 'In Progress',
      createdBy: 'Alexander Davis',
      assignedTo: 'Ernest Tsang'
    },
    {
      id: 3,
      title : 'Exercise',
      priority : 'Low',
      status: 'Queue',
      createdBy: 'Ernest Tsang',
      assignedTo: 'Alexander Davis'
    }
  ];

export const getCardsFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(cardsFromFakeDB), 500);
});

export const addCardToFakeXHR = (card) => new Promise((resolve, reject) => {
  setTimeout(() => {
    card._id = Math.random();
    cardsFromFakeDB.push(card);
    resolve(cardsFromFakeDB);
  }, 500);
});