import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
// import img from '../Images/celestial-background.jpg';

class JournalEntries extends React.Component {
  render() {
    return (
      <>
        {/* <img className='d-block w-100' src={img} alt='First slide' /> */}
        <Carousel.Caption>
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <p>{this.props.date}</p>
          <Button variant="warning" onClick={() => this.props.handleDelete(this.props.book)}>Delete Book</Button>
          <Button variant="info" onClick={() => this.props.handleUpdate(this.props.book)}>Update Book</Button>
        </Carousel.Caption>
      </>
    );
  }
}

export default JournalEntries;