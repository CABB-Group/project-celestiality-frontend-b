import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>APP</h1>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
export default App;
