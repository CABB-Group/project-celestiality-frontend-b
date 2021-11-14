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
import { Carousel } from "react-bootstrap";
import UpdateJournal from "./UpdateJournal.js";
import AddJournalButton from './AddJournalButton.js';




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
      journals: [],
    };
  }


  showJournalEntry = () => {
    this.setState({
      showjournalentry: true,
    });
  };

  handleCreate = async (journalInfo) => {
    const server = `${process.env.REACT_APP_SERVER}/journal`;
    const response = await axios.post(server, journalInfo);
    const newJournal = response.data;
    const journals = [...this.state.journals, newJournal];
    this.setState({ journals: journals })
  }

  handleDelete = async id => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER}/items/${id}`);
      const deleteItems = this.state.items.filter(item => item._id !== id);
      this.setState({
        journals: deleteItems
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleUpdate = async (journalToUpdate) => {
    const url = `${process.env.REACT_APP_SERVER}/journal/${journalToUpdate._id}`;
    try {
      const res = await axios.put(url, journalToUpdate);
      const updatedJournal = res.data;
      this.setState({
        updatedjournal: updatedJournal,
        showupdatejournal: true,
      });

      const copyState = this.state.journals;

      copyState.forEach((journal, idx) => {
        let journalArr = [];
        if (journalToUpdate._id === journal._id) {
          journalArr.push([idx, journal]);
          copyState[idx] = journalToUpdate;
          this.setState({
            journals: copyState,
          });
        }
      });
    }
    catch (e) {
      console.log(e.message);
    }
  }

  getInfo = async () => {
    try {
      console.log('getHoroscope works')
      let horoscopeAPI = await axios.get(`${process.env.REACT_APP_SERVER}/horoscope`)
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
        <section style={{ width: '50%', display: 'inline-block' }}>
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
        <section style={{ width: '50%', display: 'inline-block' }}>
          <Row>
            <Col>
              {this.state.journals.length ? (
                <Carousel>
                  {this.state.journals.map(journal => {
                    return (
                      <Carousel.Item key={journal._id}>
                        <JournalEntries
                          handleUpdate={this.handleUpdate}
                          name={journal.name}
                          description={journal.description}
                          date={journal.date}
                          handleDelete={this.handleDelete}
                          journal={journal}></JournalEntries>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>) : <h3>there are no journals!</h3>}
              {this.state.showjournalentry ? (
                <JournalEntry handleCreate={this.props.handleCreate} />) : (
                <AddJournalButton onButtonClick={this.showJournalEntry} />
              )

              }
            </Col>
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