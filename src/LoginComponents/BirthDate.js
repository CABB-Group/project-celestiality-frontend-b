import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
// import '../CSS/BirthDate.css';

class BirthDate extends React.Component {
  constructor(props){
    super(props);
    this.state={
      birthDate:'empty'
    }
  }
  handleSubmit = (e) => {
    // console.log('BirthDate level handleSubmit', e);
    e.preventDefault();
    this.props.setBirthDay(this.state.birthDate);
    this.props.changeBirthdayModal(false);
  };

  render() {
    // console.log('birthDate state: ', this.state)
    return (
      <Modal.Dialog showmodal={this.props.showmodal}  id="BirthDate">
        <Modal.Header>
          <Modal.Title>Welcome to Celestiality</Modal.Title>
        </Modal.Header>
      <br></br>
        <Modal.Body>
          <Form >
          <Form.Group className="mb-3" controlId="birthDateDescription">
            <Form.Label>Please Enter Your Birthday Here: </Form.Label>
            <Form.Control onChange={(e)=> this.setState({birthDate: e.target.value})}
              type="date"
              placeholder="Enter Your Birthday Here!"
            ></Form.Control>
          </Form.Group>
          </Form>
        </Modal.Body>
        <br></br>
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

