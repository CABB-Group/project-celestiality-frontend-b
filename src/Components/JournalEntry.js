import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../CSS/JournalEntry.css";

class JournalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      date: "",
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
  };

  render() {
    return (
      <div className="journal-entry">
        <h3>Your Journal Entry</h3>
        <Form onSubmit={this.handleSubmit}>
          {/* <Form.Title>Your Journal Entry!</Form.Title> */}

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date"
              onChange={(event) => this.setState({ date: event.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="description"
              placeholder="Enter Your Description! It can be anything"
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default JournalEntry;
