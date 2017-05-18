import React, { Component } from 'react';



// class Card extends Component {
//   constructor(props) {
//     super(props);
//     this.handleEdit = this.handleEdit.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//   }
//   handleEdit(event) {
//     event.preventDefault();
//     this.props.editCard({
//       id: this.props.id,
//       title: this.props.title,
//       priority: this.props.priority,
//       status: this.props.status,
//       createdBy: this.props.createdBy,
//       assignedTo: this.props.assignedTo
//     });
//   }
//   handleDelete(event) {
//     event.preventDefault();
//     this.props.removeCard({
//       id: this.props.id
//     });
//   }
//   render() {
//     return (
//       <div className="card">
//         <h3>{this.props.title}</h3>
//         <p>Priority: {this.props.priority}</p>
//         <p>Created by: {this.props.createdBy}</p>
//         <p>Assigned to: {this.props.assignedTo}</p>
//         <div className="edit-button">
//           <button onClick={this.handleEdit}>Edit</button>
//         </div>
//         <div className="delete-button">
//           <button onClick={this.handleDelete}>Delete</button>
//         </div>
//       </div>
//     );
//   }
// }
// export default Card;

// import React, { Component } from 'react';
// const Card = ({ title, priority, status, createdBy, assignedTo}) => (
// <div className = {`card ${priority}`}>
//     <div>{ title }</div>
//     <div>{priority}</div>
//     <div >{status}</div>
//     <div>{createdBy}</div>
//     <div>{assignedTo}</div>
// </div>
// );
// export default Card;


class Card extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 handleClick(card) {
  var newData = Object.assign({}, this.props);
  console.log(newData);
  switch ( newData.status) {
    case "Queue":
        newData.status = "In Progress";
        break;
    case "In Progress":
        newData.status = "Done";
        break;
    case "Done":
        newData.status = "Queue";
        break;
  }
    this.setState({status: event.target.value});
    console.log(newData);
  }
  updateCard(card){
    // update my parent's cards state
    const title = "";
    const priority = "";
    const status = "";
    const createdBy = "";
    const assignedTo = "";
  }
//prevents refresh
  handleSubmit(event) {
    event.preventDefault();
    this.updateCard(this.state);
    console.log(event);
  }
// DOM targets
  handleStatusChange(event) {
    console.log("event.target.value",event.target.value  );
    this.setState({ status : event.target.value });
  }
  render(){
    return (
  <div className = {`card ${this.props.priority}`}>
    <form onSubmit={this.handleSubmit}>
    <br />
    <p>Task: { this.props.title }</p>
    <div>Priority:  { this.props.priority }</div>
    <div onClick={() =>this.handleClick(this.props.card)} >Status: { this.props.status }</div>
    <div>Created By:  { this.props.createdBy }</div>
    <div>Assigned To:  { this.props.assignedTo }</div>
          <button type="submit">Update Card</button>
    </form>
  </div>
);
  }
}
export default Card;