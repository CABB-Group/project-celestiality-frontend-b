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
import axios from 'axios';
import UpdateJournal from "./UpdateJournal.js";
import AddJournalButton from './AddJournalButton.js';
// import '../CSS/Astrological.css';




class Astrological extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astrosign: [],
      horoscope: [],
      celebrity: [],
      historydates: [],
      chinesezod: [],
      zodiacpic: 'https://via.placeholder.com/150',
      showjournalentry: false,
      showupdatejournal: false,
      updatedjournal: "",
      journalentry: false,
    };
  }


  showJournalEntry = () => {
    this.setState({
      showjournalentry: true,
    });
  };

  getInfo = async () => {
    try {
      console.log('getHoroscope works')
      let horoscopeAPI = await axios.get(`${process.env.REACT_APP_SERVER}/horoscope?searchQuery=${this.props.userInfo.userBirthDate}`)
      this.setState({
        horoscope: horoscopeAPI.data[0]
      })
      console.log('horoscopeAPI', horoscopeAPI.data);
    } catch (error) {
      console.log(error.message)
    }
  }

  componentDidMount(){
    this.getInfo();
  }

  render() {
    return (
      <>
        <h2>Welcome, {this.props.userInfo.username}</h2>
        <section className="celestial" style={{display: 'inline-block' }}>
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
        </section>
        <section className="journal-entry" style={{ display: 'inline-block' }}>
          <Row>
            <Col>
              {this.state.showjournalentry ? (
                <JournalEntry handleCreate={this.props.handleCreate} />) : (
                <AddJournalButton onButtonClick={this.showJournalEntry} />
              )

              }
            </Col>
            {this.state.showjournalentry ? <JournalEntries journals= {this.props.journals} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} /> : <h3>there are no journals!</h3>}
            <UpdateJournal
              updateJournalState={this.updateJournalState}
              updateJournal={this.state.updatedjournal}
              handleUpdate={this.handleUpdate}
              showUpdateForm={this.state.showupdatejournal}
              onClose={() => this.setState({
                showupdatejournal: false
              })}
            />
          </Row>
        </section>
      </>
    );
  }
}
export default Astrological;