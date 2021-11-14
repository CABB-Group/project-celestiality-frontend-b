import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

class BirthDate extends React.Component {
  handleSubmit = (e) => {
    console.log('BirthDate level handleSubmit');
    e.preventDefault();
    this.props.handleSubmit(e);
  };

  render() {
    return (
      <Modal.Dialog showmodal={this.props.showmodal}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="birthDateDescription">
            <Form.Label>Enter Your Birthday Here: </Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Your Birthday Here!"
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
