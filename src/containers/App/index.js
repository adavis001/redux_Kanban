import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../../components/CardList';
import NewCardForm from '../NewCardForm';
import { addCardToFakeXHR, getCardsFromFakeXHR } from '../../lib/cards.db';
import { loadCards, addCard, editCard } from '../../actions';


import logo from './logo.svg';
import './styles.css';

class App extends Component {
  constructor(props){
    // give props to your parents
    super(props);
    // do your shit after parent is done doing their shit

    this.title = 'Card List App';

    // set the initial state of THIS COMPONENT
    // in the constructor
    // this.state = {
    //   cards : [],
    //   filter : ''
    // };

  }

  // life cycle hook
  // before rendering this component
  componentWillMount(){
    getCardsFromFakeXHR()
      .then( cards => {
        this.props.loadCards( cards );
      });
  }

  addCard = ( card ) => {
    this.props.addCard( card );
  }

  editCard = ( card ) => {
    this.props.editCard( card );
    console.log(card);
  }

  render() {
    return (
      <div>
      <h1>Welcome to Kanban! </h1>
        <div id="CardForm">
        <h2>New Task Form</h2>
          <NewCardForm addCard={this.addCard}/>
        </div>
       <div id="Board">
        <div id="queue">
          <h2>Queue</h2>
            <CardList  cards={this.props.cards.filter(Card => Card.status === 'Queue' )}/>
          </div>

          <div id="progress">
          <h2>Progress</h2>
            <CardList  cards={this.props.cards.filter(Card => Card.status === 'In Progress' )}/>
          </div>

          <div id="done">
          <h2>Done</h2>
            <CardList  cards={this.props.cards.filter(Card => Card.status === 'Done' )}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards))
    },
    addCard: card => {
      dispatch(addCard(card))
    },
    editCard: card => {
      dispatch(editCard(card))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;