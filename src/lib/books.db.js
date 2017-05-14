const booksFromFakeDB = [{
      id: 1,
      title : 'Order Pizza',
      priority : 'Medium',
      status: 'Done',
      author: 'Alexander Davis',
      assignedTo: 'Ernest Tsang'
    },
    {
      id: 2,
      title : 'Eat Pizza',
      priority : 'High',
      status: 'In Progress',
      author: 'Alexander Davis',
      assignedTo: 'Ernest Tsang'
    },
    {
      id: 3,
      title : 'Exercise',
      priority : 'Low',
      status: 'Queue',
      author: 'Ernest Tsang',
      assignedTo: 'Alexander Davis'
    }
  ];

export const getBooksFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(booksFromFakeDB), 500);
});

export const addBookToFakeXHR = (book) => new Promise((resolve, reject) => {
  setTimeout(() => {
    book._id = Math.random();
    booksFromFakeDB.push(book);
    resolve(booksFromFakeDB);
  }, 500);
});