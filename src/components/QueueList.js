import React, {Component} from 'react';
import Book from './Book';


class QueueList extends Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (
      <div className="BookQueue"> Queue
        {
          this.props.books
          .filter((book) =>
            book.status === 'Queue'
          )
          .map((book) => {
            return (
              <Book
                id={book._id}
                title={book.title}
                priority={book.priority}
                createdBy={book.createdBy}
                assignedTo={book.assignedTo}
              />
            );
          })
        }
      </div>
    );
  }
}

export default QueueList;