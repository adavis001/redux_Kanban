import {
  LOAD_CARDS,
  ADD_CARD,
  EDIT_CARD
} from '../actions';

const initialState = {
  cards : []
};
const cards = (state = initialState, action) => {
  // console.log("state", state);
  // console.log("action", action);

  switch(action.type){
    case LOAD_CARDS:
      return Object.assign({}, state, {
        cards : action.cards
      });

      case EDIT_CARD:
      let edited = state.cards.map(card => {
        if(card.id === action.id) {
          card.title = action.title;
          card.priority = action.priority;
          card.status = action.status;
          card.createdBy = action.createdBy;
          card.assignedTo = action.assignedTo;
          return card;
        } else {
          return card;
        }
      });
      return Object.assign({}, state, {
          cards: edited
        });

    case ADD_CARD:
      return Object.assign({}, state, {
        cards : state.cards.concat(action.card)
      });

    default:
      return state;
  }
};

export default cards;