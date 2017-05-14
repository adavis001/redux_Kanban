import {
  LOAD_BOOKS,
  ADD_BOOK
} from '../actions';

const initialState = {
  books : []
};
const books = (state = initialState, action) => {
  // console.log("state", state);
  // console.log("action", action);

  switch(action.type){
    case LOAD_BOOKS:
      return Object.assign({}, state, {
        books : action.books
      });

    case ADD_BOOK:
      return Object.assign({}, state, {
        books : state.books.concat(action.book)
      });

    default:
      return state;
  }
};

export default books;