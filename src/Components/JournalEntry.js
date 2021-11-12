import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class JournalEntry extends React.Component {
  render() {
    return (
      <>
      <h1>this is journaEntry</h1>
        <Form>
          {/* <Form.Title>Your Journal Entry!</Form.Title> */}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" />
            <Form.Text className="text-muted">
              Enter Your Journal Thoughts Here! It can be about anything!
            </Form.Text>
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
