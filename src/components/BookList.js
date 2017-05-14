import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
  <ul>
    {
      books.map( ({ _id, title, author, priority, status, assignedTo }) =>
        <Book
          key={_id}
          title={title}
          author={author}
          priority={priority}
          status = {status}
          assignedTo={assignedTo}
        />
      )
    }
  </ul>
);

export default BookList;