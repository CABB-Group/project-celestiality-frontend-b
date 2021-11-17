import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
//import { withAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
// import JournalEntries from "./JournalEntries";
//feafewfaef
//fjafwefakefe
import logo from '../Images/Celestiality-logo.png';

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
        style={{ backgroundColor: "rgb(38, 45, 145)" }}
      >
        <Navbar.Brand style={{ backgroundColor: "rgb(38, 45, 145)" }}>
          <img src={logo} alt='logo' width="290px" height="36px"></img>
        </Navbar.Brand>
        <NavItem style={{ backgroundColor: "rgb(38, 45, 145)" }}>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        
        <NavItem style={{ backgroundColor: "rgb(38, 45, 145)" }}>
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
        </NavItem>
        <NavItem style={{ backgroundColor: "rgb(38, 45, 145)" }}>
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
