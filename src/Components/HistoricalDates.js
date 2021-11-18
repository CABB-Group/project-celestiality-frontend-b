import React from 'react';
import { Accordion } from 'react-bootstrap';
// import Col from "react-bootstrap/Col";

class HistoricalDates extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Your Birthday Historical Facts!</Accordion.Header>
            {this.props.historydates.map((item, idx) => (
          <Accordion.Body key={idx}>
              <h3 > {item.description} </h3>
              </Accordion.Body>
            ))}
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default HistoricalDates;