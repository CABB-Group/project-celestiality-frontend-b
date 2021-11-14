import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './LoginComponents/Login.js';
import AboutUs from './Components/AboutUs.js';
import JournalEntries from './Components/JournalEntries';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null
    };
  }

  loginHandler = (user, event) => {
    event.preventDefault();
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <>

        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Routes>
            <Route exact path="/" element={ this.state.user ? 
              <Main /> 
              : <Login onLoginSubmit={this.loginHandler} handleFormInput={this.formInputHandler}/>}>
            </Route>
            <Route path='/aboutus' element={
              <AboutUs />
            }>
            </Route>
            <Route path='/journalentries' element={
              <JournalEntries />
            } />
          </Routes>

          <Footer />
        </Router>
      </>
    )
  }
}
export default App;
