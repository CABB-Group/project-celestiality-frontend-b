import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

class BirthDate extends React.Component {
  handleSubmit = () => {
    this.props.handleSubmit();
  };

  render() {
    return (
      <Modal.Dialog showModal={this.props.showModal}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="birthDateDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Book Description"
            ></Form.Control>
          </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={(e) => this.handleSubmit(e)} type="submit" value="submit">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default BirthDate;

{
  /* <Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Welcome Celestial!</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Modal.Text>
    <Form>
          <Form.Control type="date" placeholder="Please Enter Your Birthdate!" />
          </Form>
  </Modal.Text>
  </Modal.Body>

  <Modal.Footer>
    
    <Button variant="primary">Submit</Button>
  </Modal.Footer>
</Modal.Dialog> */
}
