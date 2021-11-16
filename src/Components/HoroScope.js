import React from 'react';
import { Accordion } from 'react-bootstrap';
import Col from "react-bootstrap/Col";

class HoroScope extends React.Component {
  render() {
    console.log('horoscope props: ', this.props.horoscope)
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" key={this.props.horoscope}>
          <Accordion.Header>Your HoroScope!</Accordion.Header>
          <Accordion.Body>
            <h5>{this.props.horoscope.description}</h5>
            {/* <h5>{this.props.horoscope}</h5> */}
            {/* {this.props.horoscope.map((item, idx) => (
              <Sign key={item.sign} itemData={item} />
            ))} */}
            {/* <Sign key={this.props._id} itemData={this.props.horoscope} /> */}
            {/* {Sign} */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

// class Sign extends React.Component {
//   render() {
//     const itemData = this.props.itemData;
//     return <Col>{itemData}</Col>;
//   }
// }

export default HoroScope;