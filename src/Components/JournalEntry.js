import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class JournalEntry extends React.Component {
  handleCreate = (e) => {
    console.log('BirthDate level handleSubmit');
    e.preventDefault();
    const journalInfo = {
      name: e.target.formBasicName.value,
      date: e.target.formDate.value,
      description: e.target.formDescription.value
    }
    this.props.handleCreate(journalInfo);
  };

  render() {
    return (
      <>
      <h1>this is journalEntry</h1>
        <Form handleSubmit={this.handleCreate}>
          {/* <Form.Title>Your Journal Entry!</Form.Title> */}

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
          <Form.Control type="description" placeholder="Enter Your Description! It can be anything" />
            </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default JournalEntry;
