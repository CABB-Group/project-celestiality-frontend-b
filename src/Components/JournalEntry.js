import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class JournalEntry extends React.Component {
  render() {
    return (
      <>
      <h1>this is journalEntry</h1>
        <Form>
          {/* <Form.Title>Your Journal Entry!</Form.Title> */}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
          <Form.Control type="description" placeholder="Enter Your Description! It can be anything" />
            </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" />
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
