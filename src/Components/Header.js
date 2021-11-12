import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
//import { withAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#f3a712" }}
      >
        <Navbar.Brand style={{ backgroundColor: "#f3a712" }}>
            Celestiality
        </Navbar.Brand>
        <NavItem style={{ backgroundColor: "#f3a712" }}>
          {/* <Link to="/" className="nav-link">
            Home
          </Link> */}
        </NavItem>
        
        <NavItem style={{ backgroundColor: "#f3a712" }}>
          {/* <Link to="/aboutus" className="nav-link">
            About Us
          </Link> */}
        </NavItem>
        <NavItem style={{ backgroundColor: "#f3a712" }}>
          {/* <Link to="/journalentries" className="nav-link">
            Journal Entries
          </Link> */}
        </NavItem>

      </Navbar>
    );
  }
}

export default Header;
