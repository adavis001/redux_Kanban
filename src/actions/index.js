// import { getBooksFromFakeXHR } from '../../lib/books.db';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';

export const loadCards = cards => {
  return {
    type: LOAD_CARDS,
    cards
  };
};

export const addCard = card => {

  return {
    type: ADD_CARD,
    card
  };

};

export function editCard(id, title, priority, status, createdBy, assignedTo) {
  return {
    type: EDIT_CARD,
    id,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  };
}

