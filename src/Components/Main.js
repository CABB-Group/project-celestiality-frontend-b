import React from "react";
// import { Col, Row } from "react-bootstrap";
import Astrological from "./Astrological.js";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import BirthDate from '../LoginComponents/BirthDate.js';
import Carousel from 'react-bootstrap/Carousel';
import JournalEntries from './JournalEntries';
import UpdateJournal from './UpdateJournal.js';
import JournalEntry from "./JournalEntry.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      showmodal: true,
      
    };
  }

  handleSubmit = (e) => {
      console.log('Main handle submit: ');
      e.preventDefault();
      this.setState({
          showmodal: false
      })
  }


  render() {
    return (
      <>
        <Row>
          <Col>
            {this.state.showmodal ? <BirthDate handleSubmit={this.handleSubmit} showModal={this.state.showmodal} /> : (
            <Astrological username={this.state.username} showjournalentry={this.state.showjournalentry}  handleCreate={this.handleCreate} />)}
          
          </Col>
        </Row>
        
      </>


    );
  }
}

// (<JournalEntry username={this.state.username} journalentry={this.state.journalentry} />)}

export default Main;
