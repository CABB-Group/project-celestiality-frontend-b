import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class UpdateJournal extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      
    }
  }
  handleSubmit = (ev) => {
    ev.preventDefault();

    const updatedObj = {
      _id: this.props.updatedjournal._id,
      name: ev.target.journalName.value,
      description: ev.target.journalDescription.value,
      date: ev.target.journalDate.value,
    };

    this.props.handleUpdate(updatedObj);
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    console.log('this is updatedJournal props',this.props);
    return (
      <>
        <Modal id="updateModal" show={this.props.showupdatejournal} onHide={this.handleClose} className="arrange-modal">
          <Modal.Header closeButton>
            <Modal.Title>UPDATE</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(ev) => this.handleSubmit(ev)}>
              <Form.Group className='mb-3' controlId='journalName'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Journal Title'
                  defaultValue={this.props.updatedjournal.name}
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3' controlId='journalDescription'>
                <br></br>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Journal Description'
                  defaultValue={this.props.updatedjournal.description}
                ></Form.Control>
              </Form.Group>
              <br></br>
              <Form.Group className='mb-3' controlId='journalDate'>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type='date'
                  placeholder='Enter the Date'
                  defaultValue={this.props.updatedjournal.date}
                ></Form.Control>
              </Form.Group>
              <br></br>
              <Button type='Submit' >Submit</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <br></br>
            <Button className="color-submit" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UpdateJournal;