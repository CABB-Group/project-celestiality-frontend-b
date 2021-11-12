import React from 'react';
import { Accordion } from 'react-bootstrap';
import Col from "react-bootstrap/Col";

class HistoricalDates extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Your Birthday Historical Facts!</Accordion.Header>
          <Accordion.Body>
            {this.props.historydates.map((item, idx) => (
              <Sign key={item._id} itemData={item} />
            ))}

            {Sign}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

class Sign extends React.Component {
  render() {
    const itemData = this.props.itemData;
    return <Col>{itemData}</Col>;
  }
}

export default HistoricalDates;