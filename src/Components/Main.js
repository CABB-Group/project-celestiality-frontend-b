import React from "react";
// import { Col, Row } from "react-bootstrap";
import Astrological from "./Astrological.js";
import JournalEntry from './JournalEntry.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      journalentry: {},
      journalentries: [],
    };
  }
  render() {
    return (
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Astrological username={this.state.username} />
            <JournalEntry username={this.state.username} journalentry={this.state.journalentry}/>
            </Route>
        </Switch>
      </Router>
      
    );
  }
}
export default Main;
