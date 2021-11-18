import React from 'react';
import '../CSS/Footer.css';
import logo from '../Images/Celestiality-logo.png';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
            <footer>
            <div id="footer" className="footer-logo" >
            
            <Link to="/" className="nav-link">
          <img src={logo} alt='logo' width="200px" height="42px" className="footer-img"></img>
          </Link>
            </div>
            </footer>
        )
    }
}

export default Footer;
