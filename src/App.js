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
      loginComplete: false,
      birthDateEntered: false,
      userInfo: {
        username: '',
        email: '',
        userBirthDate: ''
      }
    };
  }

  loginHandler = (user, event) => {
    event.preventDefault();
    this.setState({
      userInfo: {
        username: user.username,
        email: user.email
      },
      loginComplete: true
      
    });
  };

  setBirthDay = (birthDate) => {
    this.setState({
      userInfo: {
        username: this.state.userInfo.username,
        email: this.state.userInfo.email,
        userBirthDate: birthDate
      },
      birthDateEntered: true
    })
  }

  logoutHandler = () => {
    this.setState({
      userInfo: {},
    });
  };



  render() {
    console.log('App.js state: ', this.state)
    return (
      <>

        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Routes>
            <Route exact path="/" element={this.state.loginComplete ?
              <Main setBirthDay={this.setBirthDay} userInfo={this.state.userInfo} birthDateEntered={this.state.birthDateEntered}/>
              : <Login loginHandler={this.loginHandler} />}>
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
