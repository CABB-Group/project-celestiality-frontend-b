import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
//import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>APP</h1>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}
export default App;
