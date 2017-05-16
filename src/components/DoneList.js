import React, {Component} from 'react';
import Book from './Book';


class DoneList extends Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (
      <div className="BookDone"> Done
        {
          this.props.books
          .filter((book) =>
            book.status === 'Done'
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

export default DoneList;