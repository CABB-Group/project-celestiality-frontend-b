import React from 'react';
import { Accordion } from 'react-bootstrap';
// import Col from "react-bootstrap/Col";

class HistoricalDates extends React.Component {
  render() {
    // console.log('this is historicalDate:' ,this.props);
    return (
      <Accordion defaultActiveKey="0" style={{marginTop:'15px'}}>
        <Accordion.Item eventKey="0" style={{minWidth:'30rem', margin:'0px auto'}}>
          <Accordion.Header>On your Birthdate:</Accordion.Header>
            {this.props.historydates.map((item, idx) => (

          <Accordion.Body key={idx} style={{textAlign:'left', margin:'0px',padding:'0px'}}>
              <p style={{maxHeight:'.5rem', margin:'0px',fontSize:'.7rem'}}>In the year {item.year}: {item.description} </p>

              </Accordion.Body>
            ))}
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default HistoricalDates;