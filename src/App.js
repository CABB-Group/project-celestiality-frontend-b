import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './LoginComponents/Login.js';
import AboutUs from './Components/AboutUs.js';
import PastJournals from './Components/PastJournals';
import axios from 'axios';
import './App.css';


class App extends React.Component {ß
  constructor(props) {
    super(props);
    this.state = {
      loginComplete: false,
      birthDateEntered: false,
      showupdatejournal: false,
      updatedjournal: "",
      userInfo: {
        username: '',
        email: '',
        userBirthDate: '',
        journals: []
      }
    };
  }

  loginHandler = (user, event) => {
    event.preventDefault();
    this.setState({
      userInfo: {
        username: user.username,
        email: user.email,
        journals: this.state.userInfo.journals
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

  handleCreate = async (journalInfo) => {
    const server = `${process.env.REACT_APP_SERVER}/journal`;
    const response = await axios.post(server, journalInfo);
    const newJournal = response.data;
    const journals = [...this.state.userInfo.journals, newJournal];
    this.setState({ journals: journals })
  }

  handleDelete = async (journalToDelete) => {
    console.log(journalToDelete);
    const server = `${process.env.REACT_APP_SERVER}/journal/${journalToDelete}`;
    console.log(server);
    try {
      await axios.delete(server);
      const journals = this.state.journals.filter((candidate) => candidate._id !== journalToDelete);
      this.setState({ journals: journals });
      alert(journalToDelete.name+ " was deleted");

    } catch (e) {
      console.log("error");
    }
  };

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

  getJournals = async () => {
    let getJournalsApi = await axios.get(`${process.env.REACT_APP_SERVER}/journal`) 
    console.log('get Journal API', getJournalsApi.data)
    let journalData = getJournalsApi.data;
    this.setState({
        userInfo: {
        username: this.state.userInfo.username,
        email: this.state.userInfo.email,
        userBirthDate: this.state.userInfo.userBirthDate,
        journals: journalData
      }
    })
  }


  render() {
    console.log('App.js state: ', this.state);
    return (
      <>

        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
     
          <Routes>
            <Route exact path="/" element={this.state.loginComplete ?
              <Main setBirthDay={this.setBirthDay} userInfo={this.state.userInfo} birthDateEntered={this.state.birthDateEntered} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} journals={this.state.userInfo.journals}showupdatejournal={this.state.showupdatejournal}
              updatedjournal={this.state.updatedjournal} handleCreate={this.handleCreate} getJournals={this.getJournals}/>
              : <Login loginHandler={this.loginHandler}  />}>
            </Route>
            <Route path='/aboutus' element={
              <AboutUs />
            }>
            </Route>
            <Route path='/pastjournals' element={this.state.showupdatejournal ? <h3>There are no Journals here! </h3> :(
              <PastJournals handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} journals={this.state.userInfo.journals}showupdatejournal={this.state.showupdatejournal}
              updatedjournal={this.state.updatedjournal} handleCreate={this.handleCreate}/>) 
            } />
          </Routes>

          <Footer />
        </Router>
      </>
    )
  }
}
export default App;
