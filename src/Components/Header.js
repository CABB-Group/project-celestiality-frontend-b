import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
//import { withAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
// import JournalEntries from "./JournalEntries";
//feafewfaef
import logo from '../Images/Celestiality-logo.png';
import '../CSS/Header.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            showjournalentries: false
        }
    }


  render() {
    return (
      <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        
      >
        <Navbar.Brand >
          <Link to="/" className="nav-link">
          <img src={logo} alt='logo' width="290px" height="36px"></img>
          </Link>
        </Navbar.Brand>
        <NavItem >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        
        <NavItem>
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/pastjournals" className="nav-link">
            Journal Entries
          </Link>
        </NavItem>

      </Navbar>
      </header>
    );
  }
}

export default Header;
