/*jshint esversion:6*/
import React, { Component } from 'react';

class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : '',
      createdBy : '',
      status : '',
      priority : '',
      assignedTo : ''
    };

  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addCard(this.state);

    this.setState({ createdBy : '', title : '', assignedTo: '' });



  }

  handleChangeTitle = (event) => {
    this.setState({
      title : event.target.value
    });
  }

  handleStatusChange = (event) => {
    this.setState({
      status : event.target.value
    });
  }

  handlePriorityChange = (event) => {
    this.setState({
      priority : event.target.value
    });
  }
  handleAssignedToChange = (event) => {
    this.setState({
      assignedTo : event.target.value
    });
  }

  handleChangeCreatedBy= (event) => {
    this.setState({
      createdBy : event.target.value
    });
  }

  render(){
    return (
      <form id ="NewForm" onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle} />
        </div>
        <div>
          <input type="text" placeholder="Created By" value={this.state.createdBy} onChange={this.handleChangeCreatedBy} />
        </div>
        <div>
          <input type="text" placeholder="Assigned To" value={this.state.assignedTo} onChange={this.handleAssignedToChange} />
        </div>
        <div id="statusForm">Status of Task
          <input id='QueueRadio' type='radio'  name='status' value='Queue' onChange={this.handleStatusChange} />Queue
          <input id='InProgressRadio'type='radio'  name='status' value='In Progress' onChange={this.handleStatusChange} />In Progress
          <input id='DoneRadio'type='radio'  name='status' value='Done' onChange={this.handleStatusChange} />Done
        </div>
        <div id="priorityForm">Priority Level
          <input type='radio'  name='priority' value='High' onChange={this.handlePriorityChange} />High
          <input type='radio'  name='priority' value='Medium' onChange={this.handlePriorityChange} />Medium
          <input type='radio'  name='priority' value='Low' onChange={this.handlePriorityChange} />Low
        </div>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </form>
    );
  }
}

export default NewCardForm;