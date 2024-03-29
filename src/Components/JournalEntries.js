import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
// import img from '../Images/celestial-background.jpg';
import '../CSS/JournalEntries.css';
import img from '../Images/celestial-background.jpg';

class JournalEntries extends React.Component {

  updateJournal = (el) => {
    console.log('this is el', el)
    // this.props.pullUpdatedEntry(el);
    this.props.handleUpdate(el);
    this.props.showUpdateModal();
    // this.props.onClose();
    // console.log(this.props.journals._id);

  }

  render() {
    console.log('journal entries :',this.props);
    return (
      <>
        <Carousel className="carousel-journal-entries" style={{minHeight: '23rem', minWidth:'29rem', color:'red', backgroundColor: 'transparent'}}>
          {this.props.journals.map((el) =>
            <Carousel.Item key={el._id}>
              <img style={{ display: 'inline-block',margin:'0px auto' }}
                className='w-100'
                src={img}
                alt="First slide"
              />
              <Carousel.Caption style={{ color: 'black', backgroundColor: 'transparent' }}>
                <h5 style={{ backgroundColor: 'transparent' }} >{el.name}</h5>
                <div style={{ backgroundColor: 'transparent' }}>{el.date}</div>
                <div style={{ backgroundColor: 'transparent' }}>{el.description}</div>
                <br></br>
                <Button
                variant="info"
                style={{ border: '1px solid transparent' }}
                onClick={()=>this.updateJournal(el)}>
                Update
                </Button>
                <Button
                style={{ backgroundColor: '#db2b39', border: '1px solid transparent', margin: '5px' }}
                onClick={()=>this.props.handleDelete(el._id)}>
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