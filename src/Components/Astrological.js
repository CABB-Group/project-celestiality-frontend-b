import React from "react";
import { Col, Row } from "react-bootstrap";
import ZodiacPicture from './ZodiacPicture.js';
import AstroSign from './AstroSign.js';
import HoroScope from './HoroScope.js';
import HistoricalDates from './HistoricalDates.js';
import Celebrity from './Celebrity.js';
import ChineseZodiac from "./ChineseZodiac.js";
import JournalEntry from "./JournalEntry.js";
import JournalEntries from './JournalEntries';

class Astrological extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astrosign: [],
      horoscope: [],
      celebrity: [],
      historydates: [],
      chinesezod: [],
      zodiacpic: 'https://via.placeholder.com/150'
    };
  }
  render() {
    return (
      <>
        <Row>
          <Col>
            <ZodiacPicture zodiac={this.state.zodiacpic} />
          </Col>
        </Row>
        <Row>
          <Col>
            <AstroSign astrosign={this.state.astrosign} />
          </Col>
        </Row>
        <Row>
          <Col>
            <HoroScope horoscope={this.state.horoscope} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ChineseZodiac chinesezod={this.state.chinesezod} />
          </Col>
        </Row>
        <Row>
          <Col>
            <HistoricalDates historydates={this.state.historydates} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Celebrity celebrity={this.state.celebrity} />
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.journalentry ? <JournalEntry handleCreate={this.props.handleCreate}/> : (<JournalEntries />)}
          </Col>
        </Row>
      </>
    );
  }
}
export default Astrological;