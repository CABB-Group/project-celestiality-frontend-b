import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import '../CSS/JournalEntries.css';

class JournalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      date: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let createdJournal = {
      name: this.state.name,
      description: this.state.description,
      date: this.state.date,
    };
    console.log(this.state);

    this.props.handleCreate(createdJournal);
  }

  render() {
    return (
      <>
      <h1>this is journalEntry</h1>
        <Form handleSubmit={this.props.handleCreate}>
          {/* <Form.Title>Your Journal Entry!</Form.Title> */}

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" onChange={(event) => this.setState({ name: event.target.value })}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" onChange={(event) => this.setState({ date: event.target.value })}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
          <Form.Control type="description" placeholder="Enter Your Description! It can be anything" onChange={(event) => this.setState({ description: event.target.value })} />
            </Form.Group>

          <Button variant="primary" type="submit" onClick={(event) => this.handleSubmit(event)}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default JournalEntry;
