import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
  render() {
    return (
      <>

        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={
              <Main />}>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}
export default App;
