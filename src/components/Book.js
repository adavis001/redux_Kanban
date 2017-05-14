import React from 'react';

const Book = ({ title, author, priority,status, assignedTo }) => (
  <li>
    <h3>Task: { title }</h3>
    <p>Created By: { author }</p>
    <p>Priority Level:{ priority }</p>
    <p>Status: { status }</p>
    <p>Assigned To: { assignedTo }</p>
  </li>
);

export default Book;