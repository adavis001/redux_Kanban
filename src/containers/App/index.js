import React, { Component } from 'react';
import { connect } from 'react-redux';
import QueueList from '../../components/QueueList';
import ProgressList from '../../components/ProgressList';
import DoneList from '../../components/DoneList';
import NewBookForm from '../NewBookForm';
import { addBookToFakeXHR, getBooksFromFakeXHR } from '../../lib/books.db';
import { loadBooks, addBook } from '../../actions';


import logo from './logo.svg';
import './styles.css';

class App extends Component {
  constructor(props){
    // give props to your parents
    super(props);
    // do your shit after parent is done doing their shit

    this.title = 'Book List App';

    // set the initial state of THIS COMPONENT
    // in the constructor
    // this.state = {
    //   books : [],
    //   filter : ''
    // };

  }

  // life cycle hook
  // before rendering this component
  componentWillMount(){
    getBooksFromFakeXHR()
      .then( books => {
        this.props.loadBooks( books );
        // this.setState({ books });
      });
  }

  addBook = ( book ) => {
    // addBookToFakeXHR( book )
    //   .then( books => {
    //     this.setState({ books });
    //   });
    this.props.addBook( book );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Book a Task!  .then Assign it to someone!</h2>
        </div>
        <NewBookForm addBook={this.addBook} />
        <div id="BookIt">
          <QueueList books={this.props.books} />
          <ProgressList books={this.props.books} />
          <DoneList books={this.props.books} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadBooks: books => {
      dispatch(loadBooks(books))
    },
    addBook: book => {
      dispatch(addBook(book))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;