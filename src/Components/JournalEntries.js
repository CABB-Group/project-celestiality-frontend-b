import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
// import img from '../Images/celestial-background.jpg';

class JournalEntries extends React.Component {
  
  render() {
    return (
      <>
        <Carousel style={{ minHeight: '30rem', color: 'black', backgroundColor: 'transparent' }}>
          {this.props.journals.map((el) =>
            <Carousel.Item key={el._id}>
              <img style={{ display: 'inline-block', margin: '0px auto', backgroundColor: 'transparent' }}
                className="d-block"
                src="https://via.placeholder.com/400"
                alt="First slide"
              />
              <Carousel.Caption style={{ color: 'black', backgroundColor: 'transparent' }}>
                <h3 style={{ backgroundColor: 'transparent' }} >{el.name}</h3>
                <p style={{ backgroundColor: 'transparent' }}>{el.date}</p>
                <p style={{ backgroundColor: 'transparent' }}>{el.description}</p>
                <Button style={{ backgroundColor: '#534d41', border: '1px solid transparent' }} onClick={()=>{this.props.handleUpdate(el) }}>
                  Update
                </Button>
                <Button style={{ backgroundColor: '#db2b39', border: '1px solid transparent', margin: '5px' }} onClick={() => {this.props.handleDelete(el._id)}}>
                  Delete
                </Button>
              </Carousel.Caption>
            </Carousel.Item>)}
        </Carousel>
      </>
    );
  }
}

export default JournalEntries;