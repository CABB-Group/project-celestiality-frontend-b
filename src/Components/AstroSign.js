import React from "react";
import { Accordion } from "react-bootstrap";
// import Col from "react-bootstrap/Col";


class AstroSign extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0" style={{margin:'50px auto 0px', marginLeft:'14px'}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{minWidth:'30rem'}}>Your Astrological Facts!</Accordion.Header>
          <Accordion.Body style={{textAlign:'left', margin:'0px',padding:'0px'}}>
            <h6 style={{textAlign:'left'}}>Your Zodiac Sign is : {this.props.astrosign}</h6>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default AstroSign;
