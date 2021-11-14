import React from "react";
// import { Col, Row } from "react-bootstrap";
import Astrological from "./Astrological.js";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import BirthDate from '../LoginComponents/BirthDate.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmodal: true,
    };
  }

  changeBirthdayModal = (element) => {
    // console.log('Main handle submit: ', element);
    // e.preventDefault();
    this.setState({
      showmodal: element
    })
  }


  render() {
    return (
      <>
        <Row>
          <Col>
            {this.state.showmodal ?
              <BirthDate
                changeBirthdayModal={this.changeBirthdayModal}
                showModal={this.state.showmodal}
                setBirthDay={this.props.setBirthDay} />
              : <Astrological
                userInfo={this.props.userInfo} />}

          </Col>
        </Row>

      </>


    );
  }
}

// (<JournalEntry username={this.state.username} journalentry={this.state.journalentry} />)}

export default Main;
