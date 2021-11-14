import React from "react";
// import { Col, Row } from "react-bootstrap";
import Astrological from "./Astrological.js";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import BirthDate from '../LoginComponents/BirthDate.js';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import JournalEntries from './JournalEntries';
import UpdateJournal from './UpdateJournal.js';
import JournalEntry from "./JournalEntry.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      journalentry: false,
      journals: [],
      showmodal: true,
      showjournalentry: false,
      showupdatejournal: false,
      updatedjournal: ""
    };
  }

  handleSubmit = (e) => {
      console.log('Main handle submit: ');
      e.preventDefault();
      this.setState({
          showmodal: false
      })
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
            {this.state.showmodal ? <BirthDate handleSubmit={this.handleSubmit} showModal={this.state.showmodal} /> : (
            <Astrological username={this.state.username} showjournalentry={this.state.showjournalentry}  handleCreate={this.handleCreate} />)}
          </Col>
          <Col>
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
          <Col>
          <JournalEntry onCreate={this.handleCreate}></JournalEntry>
          </Col>
          <Col>
          <UpdateJournal 
            updateJournalState={this.updateJournalState}
            updateJournal = {this.state.updatedjournal}
            handleUpdate= {this.handleUpdate}
            showUpdateForm= {this.state.showupdatejournal}
            onClose={() => this.setState({
                showupdatejournal: false
            })}
          />
          </Col>
        </Row>
        
      </>


    );
  }
}

// (<JournalEntry username={this.state.username} journalentry={this.state.journalentry} />)}

export default Main;
