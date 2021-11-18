import React from 'react';
import { Accordion } from 'react-bootstrap';
import Col from "react-bootstrap/Col";

class ChineseZodiac extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Your Chinese Zodiac!</Accordion.Header>
          <Accordion.Body>
            {this.props.chinesezod.map((item, idx) => (
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

export default ChineseZodiac;