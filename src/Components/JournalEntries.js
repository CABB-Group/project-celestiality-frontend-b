import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import img from '../Images/celestial-background.jpg';
import '../CSS/JournalEntries.css';

class JournalEntries extends React.Component {

  updateJournal = () => {
    this.props.handleUpdate(this.props.journals_id)
    this.props.showUpdateModal()
  }

  render() {
    console.log(this.props.journals);
    return (
      <>
        <Carousel className="carousel-journal-entries">
          {this.props.journals.map((el) =>
            <Carousel.Item key={el._id}>
              <img style={{ display: 'inline-block' }}
                className="d-block"
                src="https://via.placeholder.com/400"
                alt="First slide"
              />
              <Carousel.Caption style={{ color: 'black', backgroundColor: 'transparent' }}>
                <h3 style={{ backgroundColor: 'transparent' }} >{el.name}</h3>
                <p style={{ backgroundColor: 'transparent' }}>{el.date}</p>
                <p style={{ backgroundColor: 'transparent' }}>{el.description}</p>
              </Carousel.Caption>
              <Button
                style={{ backgroundColor: '#534d41', border: '1px solid transparent' }}
                onClick={this.updateJournal}>
                Update
              </Button>
              <Button
                style={{ backgroundColor: '#db2b39', border: '1px solid transparent', margin: '5px' }}
                onClick={this.updateJournal}>
                Delete
              </Button>
            </Carousel.Item>)}
        </Carousel>
      </>
    );
  }
}

export default JournalEntries;