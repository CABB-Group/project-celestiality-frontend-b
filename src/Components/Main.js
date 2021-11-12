import React from "react";
// import { Col, Row } from "react-bootstrap";
import Astrological from "./Astrological.js";
import JournalEntry from './JournalEntry.js';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      journalentry: {},
      journalentries: [],
    };
  }
  render() {
    return (
      <>

        <Col>
          <Row>
            <Astrological username={this.state.username} />
          </Row>
        </Col>
        <Col>
          <Row>
            <JournalEntry username={this.state.username} journalentry={this.state.journalentry} />
          </Row>
        </Col>

      </>


    );
  }
}
export default Main;
