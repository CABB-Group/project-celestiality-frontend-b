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

  handleCreate = async(journalInfo) => {
    const server = `${process.env.REACT_APP_SERVER}/journal`;
    const response = await axios.post(server, journalInfo);
    const newJournal = response.data;
    const journals = [...this.state.journal, newJournal];
    this.setState({journals: journals})
  }

  handleDelete = async (journalToDelete) => {
      const server = `${process.env.REACT_APP_SERVER}/journal/${journalToDelete._id}`;

      try {
        await axios.delete(server);
        const journals = this.state.journals.filter(candidate => candidate._id !== journalToDelete._id);
        this.setState({journals: journals});
        alert(journalToDelete.name + `'s journal was deleted`);
      } catch(e) {
        console.log('error');
      }
  };

  handleUpdate = async (journalToUpdate) => {
    const url= `${process.env.REACT_APP_SERVER}/journals/${journalToUpdate._id}`;
    try {
        const res = await axios.put(url, journalToUpdate);
        const updatedJournal = res.data;
        this.setState({
            updatedjournal: updatedJournal,
            showupdatejournal:true,
        });

        const copyState = this.state.journals;

        copyState.forEach((journal, idx) => {
            let journalArr = [];
            if (journalToUpdate._id === journal._id) {
                journalArr.push([idx, journal]);
                copyState[idx] = journalToUpdate;
                this.setState ({
                    journals: copyState,
                });
            }
        });
    }
    catch (e) {
        console.log(e.message);
    }
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
            {this.state.journalentry ? <JournalEntries /> : (<JournalEntry handleCreate={this.props.handleCreate}/>)}
          {this.state.journals.length ? (
          <Carousel>
          {this.state.journals.map(journal => {
              return (
                <Carousel.Item key= {journal._id}>
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
          </Carousel>) : (<h3>You have no Journal Entries</h3>)}
          </Col>
          <UpdateJournal 
            updateJournalState={this.updateJournalState}
            updateJournal = {this.state.updatedjournal}
            handleUpdate= {this.handleUpdate}
            showUpdateForm= {this.state.showupdatejournal}
            onClose={() => this.setState({
                showupdatejournal: false
            })}
          />
        </Row>
      </>
    );
  }
}
export default Astrological;