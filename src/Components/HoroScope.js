import React from 'react';
import { Accordion } from 'react-bootstrap';
// import Col from "react-bootstrap/Col";

class HoroScope extends React.Component {
  render() {
    // console.log('horoscope props: ', this.props.horoscope)
    return (
      <Accordion defaultActiveKey="0" style={{padding:'0px'}}>
        <Accordion.Item eventKey="0" key={this.props.horoscope.description} style={{minWidth:'30rem', margin:'0px auto'}}>
        <Accordion.Header >Your Horoscope for {this.props.horoscope.current_date}</Accordion.Header>
          <Accordion.Body style={{textAlign:'left', margin:'0px',padding:'0px'}}>
          <h6>You are compatible with: {this.props.horoscope.compatibility}</h6>
            <p  style={{textAlign:'left',maxHeight:'4rem', fontSize:'.7rem'}}>{this.props.horoscope.description} You're probably feeling a little {this.props.horoscope.mood}. On a positive note you lucky time today is {this.props.horoscope.lucky_time}.
            Your color for the day is {this.props.horoscope.color}.</p>
            <p style={{textAlign:'left',maxHeight:'.5rem',fontSize:'.7rem'}}>Lucky number for the day: {this.props.horoscope.lucky_number}</p>
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