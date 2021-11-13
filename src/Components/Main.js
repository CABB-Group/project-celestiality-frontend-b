import React from "react";
// import { Col, Row } from "react-bootstrap";
import Astrological from "./Astrological.js";
import JournalEntry from './JournalEntry.js';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import BirthDate from '../LoginComponents/BirthDate.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      journalentry: {},
      journalentries: [],
      showModal: true
    };
  }

  handleSubmit = () => {
      this.setState({
          showModal: true
      })
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            {this.state.showModal ? <BirthDate handleSubmit={this.handleSubmit} showModal={this.showModal} /> : (
            <Astrological username={this.state.username} journalentry={this.state.journalentry} />)}
          </Col>
        </Row>
        
      </>


    );
  }
}

// (<JournalEntry username={this.state.username} journalentry={this.state.journalentry} />)}

export default Main;
