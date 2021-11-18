import React from "react";
import { Col, Row } from "react-bootstrap";
import ZodiacPicture from './ZodiacPicture.js';
import AstroSign from './AstroSign.js';
import HoroScope from './HoroScope.js';
import HistoricalDates from './HistoricalDates.js';
// import Celebrity from './Celebrity.js';
// import ChineseZodiac from "./ChineseZodiac.js";
import JournalEntry from "./JournalEntry.js";
import JournalEntries from './JournalEntries';
import axios from 'axios';
import UpdateJournal from "./UpdateJournal.js";
import AddJournalButton from './AddJournalButton.js';
import '../CSS/Astrological.css';
import img from '../Images/zodiac-wheel.jpg';




class Astrological extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astrosign: [],
      horoscope: [],
      celebrity: [],
      historydates: [],
      chinesezod: [],
      zodiacpic: {},
      showjournalentry: false,
      showupdatejournal: true,
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
      // console.log('getHoroscope works', this.props.userInfo);
      let horoscopeAPI = await axios.get(`${process.env.REACT_APP_SERVER}/horoscope?searchQuery=${this.props.userInfo.userBirthDate}`)
      this.props.getJournals();
      this.setState({
        horoscope: horoscopeAPI.data[0].horoscope,
        astrosign: horoscopeAPI.data[0].sign,
        historydates: horoscopeAPI.data[0].events,

      })
      // console.log('horoscopeAPI', horoscopeAPI.data[0]);
    } catch (error) {
      console.log(error.message)
    }
  }



  componentDidMount() {
    this.getInfo();
  }

  render() {
    // console.log('astro props:', this.props.userInfo.journals);
    return (
      <main>
        <h2>Welcome, {this.props.userInfo.username}!</h2>
        <section className="celestial" style={{ width:'50%', display: 'inline-block' }}>
          <Row>

            <div className="zod-picture">
              {/* <div className="zod-pic-title">Zodiac Picture</div> */}
              <ZodiacPicture zodiacpic={img} />
            </div>
            
            <Col id="astrosign">
              <AstroSign astrosign={this.state.astrosign} />
            </Col>

            <Col id="horoscope">
              <HoroScope horoscope={this.state.horoscope} />

            </Col>
            
              
              <HistoricalDates historydates={this.state.historydates} />

            
            <Row>

              {/* <ChineseZodiac chinesezod={this.state.chinesezod} /> */}

            </Row>

            <Row>

              {/* <Celebrity celebrity={this.state.celebrity} /> */}

            </Row>
          </Row>
        </section>
        <section className="journal-entry" style={{ width:'50%',display: 'inline-block' }}>

          {this.state.showjournalentry ? (
            <JournalEntry
              handleCreate={this.props.handleCreate} />) : (
            <AddJournalButton
              onButtonClick={this.showJournalEntry} />
          )
          }
          {this.props.userInfo.journals ?
            <JournalEntries
            showUpdateModal={this.props.showUpdateModal}
              showupdatejournal={this.state.showupdatejournal}
              journals={this.props.journals}
              handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
              pullUpdatedEntry={this.props.pullUpdatedEntry}/>
              : <h3>there are no journals!</h3>}
          {this.state.showupdatejournal ?
            <UpdateJournal
              showupdatejournal={this.props.showupdatejournal}
              updatedjournal={this.props.updatedjournal}
            handleUpdate={this.props.handleUpdate}
            onClose={() => this.setState({
              showupdatejournal: false
            })}
            // showupdatejournal={this.state.showupdatejournal}
            
            />
            : ''}

        </section>
      </main>
    );
  }
}
export default Astrological;