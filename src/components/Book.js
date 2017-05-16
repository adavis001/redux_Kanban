import React from 'react';

const Book = ({ title, author, priority,status, assignedTo, }) => (
  <div id="BookThing">
    <h3>Task: { title }</h3>
    <p>Created By: { author }</p>
    <p>Priority Level:{ priority }</p>
    <p>Status: { status }</p>
    <p>Assigned To: { assignedTo }</p>
  </div>
);

export default Book;