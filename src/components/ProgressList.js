import React, {Component} from 'react';
import Book from './Book';


class ProgressList extends Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (
      <div className="BookProgress"> In Progress
        {
          this.props.books
          .filter((book) =>
            book.status === 'In Progress'
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

export default ProgressList;